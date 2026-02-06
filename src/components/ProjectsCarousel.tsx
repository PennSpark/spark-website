"use client";

import { assetUrl } from "../utils";
import React, { useMemo, useState, useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { allProjects, type Project } from "../data/allProjects";

const BASE_CARD_WIDTH = 354.129;
const CARD_GAP = 48;
const ACTIVE_HEIGHT_RATIO = 532.092 / BASE_CARD_WIDTH;
const INACTIVE_HEIGHT_RATIO = 363.117 / BASE_CARD_WIDTH;
const VISIBLE_RADIUS = 2;

const SWIPE_THRESHOLD = 40; // px
const TAP_SLOP = 10; // px lenience before drag

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

export default function ProjectsCarousel({ semesters, tags }: ProjectsCarouselProps) {
  const projects: Project[] = useMemo(() => {
    let base = [...allProjects];

    if (semesters?.length) base = base.filter((p) => semesters.includes(p.semester));
    if (tags?.length) base = base.filter((p) => tags.some((tag) => p.tags.includes(tag)));

    return base.sort((a, b) => semesterKey(b.semester) - semesterKey(a.semester));
  }, [semesters, tags]);

  const [activeIndex, setActiveIndex] = useState(() =>
    projects.length > 0 ? Math.floor(projects.length / 2) : 0
  );

  const len = projects.length;

  const safeActiveIndex = useMemo(() => {
    if (len <= 0) return 0;
    return ((activeIndex % len) + len) % len;
  }, [activeIndex, len]);


  const [cardWidth, setCardWidth] = useState(BASE_CARD_WIDTH);
  const [cardOffset, setCardOffset] = useState(BASE_CARD_WIDTH + CARD_GAP);

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      let width = BASE_CARD_WIDTH;
      if (w < 640) width = 260;
      else if (w < 1024) width = 310;
      setCardWidth(width);
      setCardOffset(width + CARD_GAP);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const goNext = () => {
    if (!len) return;
    setActiveIndex((prev) => ((prev + 1) % len + len) % len);
  };

  const goPrev = () => {
    if (!len) return;
    setActiveIndex((prev) => ((prev - 1) % len + len) % len);
  };

  const gesture = useRef({
    pointerId: -1,
    startX: 0,
    lastX: 0,
    moved: false,
  });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    gesture.current.pointerId = e.pointerId;
    gesture.current.startX = e.clientX;
    gesture.current.lastX = e.clientX;
    gesture.current.moved = false;

  if (e.pointerType !== "mouse") {
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (gesture.current.pointerId !== e.pointerId) return;

    const dx = e.clientX - gesture.current.startX;
    gesture.current.lastX = e.clientX;

    if (!gesture.current.moved && Math.abs(dx) > TAP_SLOP) {
      gesture.current.moved = true;
    }

    if (gesture.current.moved) e.preventDefault();
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (gesture.current.pointerId !== e.pointerId) return;

    const delta = gesture.current.lastX - gesture.current.startX;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) goNext();
      else goPrev();
    }

    gesture.current.pointerId = -1;
    gesture.current.moved = false;
  };

  const onPointerCancel = () => {
    gesture.current.pointerId = -1;
    gesture.current.moved = false;
  };

  const positionedProjects = useMemo(
    () =>
      projects.map((project, index) => {
        const rel = getRelativePosition(index, safeActiveIndex, len);
        const isActive = rel === 0;
        const isVisible = Math.abs(rel) <= VISIBLE_RADIUS;
        return { project, index, rel, isActive, isVisible };
      }),
    [projects, safeActiveIndex, len]
  );


  if (!projects.length) return null;

  const activeHeight = cardWidth * ACTIVE_HEIGHT_RATIO;
  const inactiveHeight = cardWidth * INACTIVE_HEIGHT_RATIO;

  return (
    <section className="w-full flex flex-col justify-center items-center overflow-hidden select-none">
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
          className="relative w-full overflow-x-hidden select-none"
          style={{
            height: activeHeight + 80,
            touchAction: "pan-y",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          {positionedProjects.map(({ project, index, rel, isActive, isVisible }) => {
            if (!isVisible) return null;

            const translateX = rel * cardOffset;
            const depth = VISIBLE_RADIUS - Math.min(Math.abs(rel), VISIBLE_RADIUS);
            const z = (isActive ? 1000 : 100) + depth * 10 + (rel < 0 ? 1 : 0);

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
              cursor: "grab",
              display: "flex",
              flexDirection: "column",
              boxShadow: isActive
                ? "0 12px 32px rgba(0, 0, 0, 0.15)"
                : "0 4px 12px rgba(0, 0, 0, 0.08)",
              transform: `translate(-50%, -50%) translateX(${translateX}px)`,
              zIndex: z,
              transition:
                "transform 0.6s cubic-bezier(0.4,0,0.2,1), height 0.6s cubic-bezier(0.4,0,0.2,1), box-shadow 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
              userSelect: "none",
            };

            const imageWrapperStyle: CSSProperties = {
              position: "relative",
              width: "100%",
              height: cardWidth * 0.65,
              borderBottom: "1px solid #000",
              overflow: "hidden",
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
                onClick={(e) => {
                  if (gesture.current.moved) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                  }
                  setActiveIndex(index);
                }}
                draggable={false}
              >
                {isActive && (
                  <div style={imageWrapperStyle}>
                    <img
                      src={assetUrl(project.headerImage || "/project-images/placeholder.webp")}
                      alt={project.title}
                      sizes={`${cardWidth}px`}
                      className="min-w-full min-h-full"
                      style={{ objectFit: "cover" }}
                      draggable={false}
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
          })}
        </div>
      </div>
      <div className='w-full flex flex-row justify-center gap-1'>
        <button
          style={{ border: 'none' }}
          aria-label="Previous"
          onClick={goPrev}
        >
          ←
        </button>
        <button
          style={{ border: 'none' }}
          type="button"
          aria-label="Next"
          onClick={goNext}
        >
          →
        </button>
      </div>
    </section>
  );
}
