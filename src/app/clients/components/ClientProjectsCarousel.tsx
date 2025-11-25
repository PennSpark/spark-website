"use client";

import Image from "next/image";
import { useMemo, useState, CSSProperties } from "react";

type Project = {
  title: string;
  term: string;
  description: string;
  imageSrc: string;
};

const projects: Project[] = [
  {
    title: "Stride",
    term: "Fall 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/images/stride.png",
  },
  {
    title: "Project 2",
    term: "Spring 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    imageSrc: "/images/stride.png",
  },
  {
    title: "Project 3",
    term: "Summer 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    imageSrc: "/images/stride.png",
  },
  {
    title: "Project 4",
    term: "Fall 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    imageSrc: "/images/stride.png",
  },
  {
    title: "Project 5",
    term: "Spring 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    imageSrc: "/images/stride.png",
  },
];

const VISIBLE_RADIUS = 2; // active ± 2 -> 5 cards visible

function getRelativePosition(
  index: number,
  activeIndex: number,
  length: number
) {
  const half = Math.floor(length / 2);
  let diff = index - activeIndex;

  // wrap around on a circle so we always take the "shortest" direction
  if (diff > half) diff -= length;
  if (diff < -half) diff += length;

  return diff; // in [-half, half]
}

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(projects.length / 2)
  );

  const positionedProjects = useMemo(
    () =>
      projects.map((project, index) => {
        const rel = getRelativePosition(index, activeIndex, projects.length);
        const isActive = rel === 0;
        const isVisible = Math.abs(rel) <= VISIBLE_RADIUS;
        return { project, index, rel, isActive, isVisible };
      }),
    [activeIndex]
  );

  return (
    <section className="projects-carousel-root">
      <div className="projects-carousel-container">
        <div className="projects-carousel-row">
          {positionedProjects.map(
            ({ project, index, rel, isActive, isVisible }) =>
              isVisible && (
                <article
                  key={`${project.title}-${index}`}
                  className={
                    "project-card " +
                    (isActive
                      ? "project-card--active"
                      : "project-card--inactive")
                  }
                  style={{ 
                    "--rel": rel,
                    opacity: Math.abs(rel) > VISIBLE_RADIUS - 0.5 ? 0 : undefined
                  } as CSSProperties}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Active card gets the image */}
                  {isActive && (
                    <div className="project-card-image">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        sizes="354px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}

                  {/* All cards show the text, left aligned */}
                  <div className="project-card-content">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-term">{project.term}</p>
                    <p className="project-card-description">
                      {project.description}
                    </p>
                  </div>
                </article>
              )
          )}
        </div>
      </div>
    </section>
  );
}
