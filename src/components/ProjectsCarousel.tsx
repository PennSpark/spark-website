"use client";

import { assetUrl } from "../utils";

import {
  useMemo,
  useState,
  useEffect,
  type CSSProperties,
  type MouseEvent,
  type TouchEvent,
} from "react";
import { Link } from "react-router-dom";
import { allProjects, type Project } from "../data/allProjects";

const BASE_CARD_WIDTH = 354.129;
const CARD_GAP = 48;
const ACTIVE_HEIGHT_RATIO = 532.092 / BASE_CARD_WIDTH;
const INACTIVE_HEIGHT_RATIO = 363.117 / BASE_CARD_WIDTH;
const VISIBLE_RADIUS = 2;
const SWIPE_THRESHOLD = 40; // px

export type ProjectsCarouselProps = {
  semesters?: string[];
  tags?: string[];
};

function semesterKey(s: string) {
  const [season, yearStr] = s.split(" ");
  const year = Number(yearStr) || 0;
  const seasonCode = season === "Spring" ? 1 : 2;
  return year * 10 + seasonCode;
}

function getRelativePosition(index: number, activeIndex: number, length: number) {
  const half = Math.floor(length / 2);
  let diff = index - activeIndex;

  if (diff > half) diff -= length;
  if (diff < -half) diff += length;

  return diff;
}

export default function ProjectsCarousel({
  semesters,
  tags,
}: ProjectsCarouselProps) {
  const projects: Project[] = useMemo(() => {
    let base = [...allProjects];

    if (semesters && semesters.length > 0) {
      base = base.filter((p) => semesters.includes(p.semester));
    }

    if (tags && tags.length > 0) {
      base = base.filter((p) => tags.some((tag) => p.tags.includes(tag)));
    }

    return base.sort(
      (a, b) => semesterKey(b.semester) - semesterKey(a.semester)
    );
  }, [semesters, tags]);

  const [activeIndex, setActiveIndex] = useState(() =>
    projects.length > 0 ? Math.floor(projects.length / 2) : 0
  );
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  // responsive card width + spacing
  const [cardWidth, setCardWidth] = useState(BASE_CARD_WIDTH);
  const [cardOffset, setCardOffset] = useState(BASE_CARD_WIDTH + CARD_GAP);

  useEffect(() => {
    const updateSize = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;

      let width = BASE_CARD_WIDTH;
      if (w < 640) {
        width = 260; // phone
      } else if (w < 1024) {
        width = 310; // tablet
      } else {
        width = BASE_CARD_WIDTH; // desktop
      }

      setCardWidth(width);
      setCardOffset(width + CARD_GAP); // keep a similar visual spacing
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const goNext = () => {
    if (projects.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const goPrev = () => {
    if (projects.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handlePointerStart = (clientX: number) => {
    setDragStartX(clientX);
  };

  const handlePointerEnd = (clientX: number) => {
    if (dragStartX == null) return;
    const delta = clientX - dragStartX;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) goNext();
      else goPrev();
    }
    setDragStartX(null);
  };

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) =>
    handlePointerStart(e.clientX);
  const onMouseUp = (e: MouseEvent<HTMLDivElement>) =>
    handlePointerEnd(e.clientX);
  const onMouseLeave = () => setDragStartX(null);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const x = e.touches[0]?.clientX;
    if (x != null) handlePointerStart(x);
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const x = e.changedTouches[0]?.clientX;
    if (x != null) handlePointerEnd(x);
  };

  const positionedProjects = useMemo(
    () =>
      projects.map((project, index) => {
        const rel = getRelativePosition(index, activeIndex, projects.length);
        const isActive = rel === 0;
        const isVisible = Math.abs(rel) <= VISIBLE_RADIUS;
        return { project, index, rel, isActive, isVisible };
      }),
    [activeIndex, projects]
  );

  if (projects.length === 0) return null;

  const activeHeight = cardWidth * ACTIVE_HEIGHT_RATIO;
  const inactiveHeight = cardWidth * INACTIVE_HEIGHT_RATIO;

  return (
    <section className="w-full flex justify-center overflow-hidden select-none">
      <div
        className="w-full max-w-[1400px] relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="relative w-full overflow-x-hidden overflow-y-visible"
          style={{ height: activeHeight + 80 }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {positionedProjects.map(
            ({ project, index, rel, isActive, isVisible }) => {
              if (!isVisible) return null;

              const translateX = rel * cardOffset;

              const cardStyle: CSSProperties = {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: cardWidth,
                height: isActive ? activeHeight : inactiveHeight,
                borderRadius: 30,
                border: "1.25px solid #000",
                background: "#ffffff",
                overflow: "hidden",
                cursor: "move",
                display: "flex",
                flexDirection: "column",
                boxShadow: isActive
                  ? "0 12px 32px rgba(0, 0, 0, 0.15)"
                  : "0 4px 12px rgba(0, 0, 0, 0.08)",
                transform: `translate(-50%, -50%) translateX(${translateX}px)`,
                opacity:
                  Math.abs(rel) > VISIBLE_RADIUS - 0.5
                    ? 0
                    : isActive
                    ? 1
                    : 0.7,
                zIndex: isActive ? 10 : 5,
                transition:
                  "transform 0.6s cubic-bezier(0.4,0,0.2,1), height 0.6s cubic-bezier(0.4,0,0.2,1), box-shadow 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
              };

              const imageWrapperStyle: CSSProperties = {
                position: "relative",
                width: "100%",
                height: cardWidth * 0.65,
                borderBottom: "1px solid #000",
                overflow: "hidden",
                transition: "height 0.7s ease",
              };

              const contentStyle: CSSProperties = {
                flex: 1,
                padding: "20px 24px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                textAlign: "left",
                alignItems: "flex-start",
              };

              return (
                <Link
                  to={"/projects" + project.pageKey}
                  key={`${project.title}-${index}`}
                  style={cardStyle}
                  onClick={() => setActiveIndex(index)}
                >
                  {isActive && (
                    <div style={imageWrapperStyle}>
                      <img
                        src={ assetUrl(
                          project.headerImage ||
                          "/project-images/placeholder.png"
                      )}
                        alt={project.title}
                        sizes={`${cardWidth}px`}
                        className='min-w-full min-h-full'
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}

                  <div style={contentStyle}>
                    <h2>{project.title}</h2>
                    <h4>{project.semester}</h4>
                    <p>{project.description}</p>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
