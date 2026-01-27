import { useEffect, useState } from "react";
import ProjectBackgroundScroll from "./ProjectBackgroundScroll";

export default function Title() {
  const [showingProjects, setShowingProjects] = useState(false);

  useEffect(() => {
    if (showingProjects) {
      console.log("Mouse entered the right side of the screen");
    }
  }, [showingProjects]);

  return (
    <>
      <div
        className={`absolute -z-5 w-screen h-screen bg-gradient-to-r from-white to-white/20 
        transition-opacity duration-700 ease-in-out 
        ${
          showingProjects
            ? "opacity-0 backdrop-blur-0"
            : "opacity-100 backdrop-blur-[3px]"
        }`}
      ></div>

      <ProjectBackgroundScroll />

      {showingProjects && (
        <div className="absolute left-16 bottom-16 z-10">
          <button
            className="black-circular"
            onClick={() => {
              setShowingProjects(false);
            }}
          >
            &larr;
          </button>
        </div>
      )}

      <div
        className={`transition-all duration-400 ease-in-out ${
          showingProjects ? "opacity-0" : "block"
        }`}
      >
        {/* Title Card! */}
        <section
          className={`relative flex-col px-8 md:px-32 lg:px-42 w-[100svw] h-[100svh] items-start justify-center flex`}
        >
          <h1>
            we are <span id="header-spark-text">spark</span>
          </h1>
          <h3 className="max-w-2xl mb-10">
            We&apos;re a group of students at the University of Pennsylvania that
            bridge <b>tech</b> and <b>design</b> to build both creative projects
            and impactful products for clients and the community.
          </h3>

          {/* view more button */}
          <button
            id="black-button"
            onClick={() => {
              setShowingProjects((prev) => !prev);
            }}
            className="mx-1"
          >
            View More
          </button>
        </section>
      </div>
    </>
  );
}
