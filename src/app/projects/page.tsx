"use client";
import Image from "next/image";
import HeaderBanner from "../components/HeaderBanner";

import ProjectList from "./components/ProjectList";
import ProjectCarousel from "./components/ProjectCarousel";

export default function Projects() {
  return (
    <>
      <HeaderBanner className="bg-[#F5654E] text-white mb-20 ">
        <h1>
          Making ideas tangible <br></br> through design and code.
        </h1>
      </HeaderBanner>

      <section id="header-section">
        <h1>
          spark <span id="header-spark-text">work</span>
          <Image
            src="/brand-icons/red-surprised-face.svg"
            alt="Spark Work Icon"
            width={42}
            height={42}
            className="inline-block ml-3 mb-3.5"
          />
        </h1>
        <p className="description-paragraph">
          Each semester, our members come together to work on a variety of
          engineering and/or design projects. In the past, projects have ranged
          from redesigning a startup’s pilot program helping students with ADHD
          to developing a machine learning model that identifies pictures as
          emojis. We work on both client and passion projects!
        </p>
      </section>
      <section id="header-section">Recent Works</section>
      <section className="full-width-content-section">
        <ProjectCarousel />
      </section>
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
