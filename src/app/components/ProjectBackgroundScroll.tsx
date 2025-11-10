"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { allProjects } from "../projects/components/AllProjects";

const MAX_RECENT_PROJECTS = 7;

function ProjectRow({ reverse = false }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      speed: 0.1,
      startDelay: 0,
      direction: reverse ? "backward" : "forward",
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex">
        {allProjects.slice(0, MAX_RECENT_PROJECTS).map((p, i) => (
          <div key={i} className="basis-[18rem] mr-8">
            <div className="relative h-[12rem] w-[18rem] rounded-3xl overflow-hidden border border-white/10 shadow-lg bg-white/5">
              <Image
                src="/project-images/testproceduralcity.png"
                alt={`${p.title}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectBackgroundScroll() {
  return (
    <section className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="space-y-10 rotate-[-6deg] scale-125">
        <ProjectRow />
        <ProjectRow />
        <ProjectRow />
      </div>
    </section>
  );
}
