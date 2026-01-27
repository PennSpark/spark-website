"use client";
import DrawBanner from "../components/banners/DrawBanner";

import ProjectList from "../components/projects-components/ProjectList";
import ProjectGrid from "../components/projects-components/ProjectGrid";

export default function Projects() {
  return (
    <>
      <DrawBanner className="absolute text-black mb-20 z-5">
        <h1 className='pointer-events-none select-none'>
          Making ideas tangible <br></br> through design and code.
        </h1>
      </DrawBanner>

      <section id="header-section">
        <h1>spark <span id="header-spark-text">work</span></h1>
        <p className="description-paragraph">
          Each semester, our members come together to work on a variety of
          engineering and/or design projects. In the past, projects have ranged
          from redesigning a startup’s pilot program helping students with ADHD
          to developing a machine learning model that identifies pictures as
          emojis. We work on both client and passion projects!
        </p>
      </section>
      <h2>Recent Works</h2>
      <ProjectGrid />
      <section id="header-section">Our Projects</section>
      <section className="content-section w-full">
        <ProjectList />
      </section>
      <section className="content-section w-full">
        <button>View Github</button>
      </section>
    </>
  );
}
