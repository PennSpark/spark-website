"use client";

import Image from "next/image";
import {
  useMemo,
  useState,
  useEffect,
  CSSProperties,
  type MouseEvent,
  type TouchEvent,
} from "react";
import { allProjects, type Project } from "../projects/components/AllProjects";

const CARD_WIDTH = 354.129;
const CARD_GAP = 48;
const CARD_OFFSET = CARD_WIDTH + CARD_GAP;
const ACTIVE_HEIGHT = 532.092;
const INACTIVE_HEIGHT = 363.117;
const VISIBLE_RADIUS = 2;
const SWIPE_THRESHOLD = 40; // px

export type ProjectsCarouselProps = {
  semesters?: string[]; //optional filter by semesters
  tags?: string[]; //optional filter by tabs
};

function semesterKey(s: string) {
  const [season, yearStr] = s.split(" ");
  const year = Number(yearStr) || 0;
  const seasonCode = season === "Spring" ? 1 : 2; // Spring=early, Fall=late
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
  // Filter + sort (newest → oldest)
  const projects: Project[] = useMemo(() => {
    let base = [...allProjects];

    if (semesters && semesters.length > 0) {
      base = base.filter((p) => semesters.includes(p.semester));
    }

    if (tags && tags.length > 0) {
      base = base.filter((p) =>
        tags.some((tag) => p.tags.includes(tag))
      );
    }

    return base.sort(
      (a, b) => semesterKey(b.semester) - semesterKey(a.semester)
    );
  }, [semesters, tags]);

  const [activeIndex, setActiveIndex] = useState(() =>
    projects.length > 0 ? Math.floor(projects.length / 2) : 0
  );
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  // Re-center when the filtered project list changes
  useEffect(() => {
    if (projects.length === 0) return;
    const center = Math.floor(projects.length / 2);
    setActiveIndex((prev) =>
      prev >= projects.length ? center : prev
    );
  }, [projects.length]);

  const goNext = () => {
    if (projects.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const goPrev = () => {
    if (projects.length === 0) return;
    setActiveIndex((prev) =>
      prev - 1 < 0 ? projects.length - 1 : prev - 1
    );
  };

  const handlePointerStart = (clientX: number) => {
    setDragStartX(clientX);
  };

  const handlePointerEnd = (clientX: number) => {
    if (dragStartX == null) return;
    const delta = clientX - dragStartX;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) {
        // swiped left → next
        goNext();
      } else {
        // swiped right → previous
        goPrev();
      }
    }

    setDragStartX(null);
  };

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    handlePointerStart(e.clientX);
  };

  const onMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    handlePointerEnd(e.clientX);
  };

  const onMouseLeave = () => {
    setDragStartX(null);
  };

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
          style={{ height: ACTIVE_HEIGHT + 80 }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {positionedProjects.map(
            ({ project, index, rel, isActive, isVisible }) => {
              if (!isVisible) return null;

              const translateX = rel * CARD_OFFSET;

              const cardStyle: CSSProperties = {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: CARD_WIDTH,
                height: isActive ? ACTIVE_HEIGHT : INACTIVE_HEIGHT,
                borderRadius: 30,
                border: "1.25px solid #000",
                background: "#ffffff",
                overflow: "hidden",
                cursor: "pointer",
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
                height: 220,
                borderBottom: "1px solid #000",
                overflow: "hidden",
                transition: "height 0.7s ease",
              };

              const contentStyle: CSSProperties = {
                flex: 1,
                padding: "24px 32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                textAlign: "left",
                alignItems: "flex-start",
              };

              const titleStyle: CSSProperties = {
                margin: 0,
                color: "#000",
                fontFamily: "'Hanken Grotesk','Inter','Karla',sans-serif",
                fontSize: "2.0rem",
                fontWeight: 500,
              };

              const termStyle: CSSProperties = {
                margin: 0,
                color: "#000",
                fontFamily: "'Hanken Grotesk','Inter','Karla',sans-serif",
                fontSize: "1.1rem",
                fontWeight: 400,
              };

              const descStyle: CSSProperties = {
                marginTop: 10,
                color: "#4b4b4b",
                fontFamily: "'Hanken Grotesk','Inter','Karla',sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
              };

              return (
                <article
                  key={`${project.title}-${index}`}
                  style={cardStyle}
                  onClick={() => setActiveIndex(index)}
                >
                  {isActive && (
                    <div style={imageWrapperStyle}>
                      <Image
                        src={
                          project.headerImage ||
                          "/project-images/placeholder.png"
                        }
                        alt={project.title}
                        fill
                        sizes="354px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}

                  <div style={contentStyle}>
                    <h3 style={titleStyle}>{project.title}</h3>
                    <p style={termStyle}>{project.semester}</p>
                    <p style={descStyle}>{project.description}</p>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
