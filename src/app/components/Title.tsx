import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";
import ProjectCarousel from "../projects/components/ProjectCarousel";
import ProjectBackgroundScroll from "./ProjectBackgroundScroll";

function TitleInfo() {
  return (
    <>
      {/* Title Card! */}
      <section
        className={`relative flex-col px-8 md:px-32 lg:px-42 w-[100svw] h-[100svh] items-start justify-center flex`}
      >
        {/* Background component */}

        {/* Foreground components */}
        <Image
          src="/brand-icons/three-icons.svg"
          alt="Spark Brand Icons"
          width={180}
          height={42}
          className="mb-[-5] hover:scale-110
            transition-transform duration-300"
        />
        <h1 id="big-header">
          we are <span id="header-spark-text">spark</span>
        </h1>
        <p className="larger-text max-w-[30vw] mb-10 mx-2">
          We're a group of students at the University of Pennsylvania that
          bridge <b>tech</b> and <b>design</b> to build both creative projects
          and impactful products for clients and the community.
        </p>

        {/* view more button */}
        <button
          id="black-button"
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mx-1"
        >
          View More
        </button>
      </section>
    </>
  );
}

export default function Title() {
  const [isOnRightSide, setIsOnRightSide] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const screenWidth = window.innerWidth;
      const rightBoundary = screenWidth * 0.55; // right 60% of screen

      setIsOnRightSide(e.clientX > rightBoundary && window.scrollY < 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (isOnRightSide) {
      console.log("Mouse entered the right side of the screen");
      // you can trigger animations, blur increase, etc. here
    }
  }, [isOnRightSide]);

  return (
    <>
      {/* <div
        className="absolute inset-0 -z-5 w-screen h-screen backdrop-blur-xl bg-blue/40
        mask-image-[linear-gradient(to_top,rgba(0,0,0,1)_0%,transparent_100%)]"
      ></div> */}
      <div
        className={`absolute -z-5 w-screen h-screen bg-gradient-to-r from-white from-40% to-transparent 
        transition-all duration-700 ease-in-out 
        ${
          isOnRightSide
            ? "opacity-0 backdrop-blur-0"
            : "opacity-100 backdrop-blur-[3px]"
        }`}
      ></div>

      <ProjectBackgroundScroll />

      <div
        className={`transition-all duration-400 ease-in-out ${
          isOnRightSide ? "opacity-0" : "block"
        }`}
      >
        <TitleInfo />
      </div>
    </>
  );
}
