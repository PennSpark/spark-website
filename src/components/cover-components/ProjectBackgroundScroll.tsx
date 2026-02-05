"use client";

import { assetUrl } from "../../utils";

import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useMemo } from "react";
import { allProjects } from "../../data/allProjects";

const MAX_RECENT_PROJECTS = 24;

type ProjectRowProps = {
  reverse?: boolean;
  offset?: number;
};

function ProjectRow({ reverse = false, offset = 0 }: ProjectRowProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      speed: 0.1,
      startDelay: 0,
      direction: reverse ? "backward" : "forward",
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);

  // offsetting indices so each row starts at different project
  const projects = useMemo(() => {
    const src = allProjects.slice(0, MAX_RECENT_PROJECTS).slice().reverse();
    const len = src.length || 1;
    return src.map((_, i) => src[(i + offset) % len]);
  }, [offset]);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex">
        {projects.map((p, i) => (
          <div key={p.pageKey ?? `${p.title}-${i}`} className="basis-[18rem] mr-8">
            <div className="relative h-[12rem] w-[18rem] rounded-3xl overflow-hidden border border-white/10 shadow-lg bg-white/5">
              <Link to={"/projects" + p.pageKey}
              >
                <img
                  src={assetUrl(p.headerImage || "/project-images/placeholder.png")}
                  alt={p.title}
                  className="object-cover cursor-pointer"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectBackgroundScroll() {
  return (
    <section className="absolute inset-0 z-0 overflow-hidden">
      <div className="space-y-10 rotate-[-6deg] scale-125">
        <ProjectRow offset={0} />
        <ProjectRow offset={8} reverse />
        <ProjectRow offset={16} />
      </div>
    </section>
  );
}
