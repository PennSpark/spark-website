"use client";

import React from "react";
import Link from "next/link";
import HeaderBanner from "./components/HeaderBanner";
import Image from "next/image";
import ProjectBackgroundScroll from "./components/ProjectBackgroundScroll";

import { useEffect, useState } from "react";
import ProjectCarousel from "./projects/components/ProjectCarousel";

function NumberCard({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color: string;
}) {
  return (
    <div
      className="
            w-50 h-50 pb-2 gap-2
            bg-white 
            border-black border-3
            rounded-[40px] 
            shadow-lg
            flex flex-col items-center justify-center
            font-sans
            hover:scale-105
            transition-transform duration-300
          "
    >
      {/* The large number */}
      <span id={color} className="text-[96px]">
        {number}
      </span>

      {/* The label text */}
      <div
        id="hanken"
        className="
              text-lg 
              font-medium 
              text-black
            "
      >
        {label}
      </div>
    </div>
  );
}

function Title() {
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
          className="mb-[-5]"
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

export default function HomePage() {
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
        <Title />
      </div>

      <section
        id="about"
        className="justify-center items-center flex flex-col mx-20 mb-40"
      >
        <section className="flex gap-10">
          <h1 id="big-header">
            what we <span id="header-spark-text">do</span>
          </h1>
          <img
            src="/brand-icons/yellow-smile-face.svg"
            alt="Spark Brand Icon"
            width={64}
            height={42}
          ></img>
        </section>
        <p className="larger-text text-center max-w-[49vw] mb-1 mx-2">
          Established in Spring 2021, Spark is a community of student developers
          and designers at the University of Pennsylvania that builds both
          creative and client projects.
        </p>

        <section className="flex gap-10 mt-20 mb-10">
          <NumberCard
            number="58"
            label="Active Members"
            color="red-header-spark-text"
          />
          <NumberCard
            number="42"
            label="Projects Complete"
            color="yellow-header-spark-text"
          />
          <NumberCard
            number="9"
            label="Live Semesters"
            color="blue-header-spark-text"
          />
        </section>

        <button>
          <Link href="/about">About Us &rarr;</Link>
        </button>
      </section>

      <section
        id="recent-work"
        className="justify-center items-center flex flex-col mx-20 mb-40"
      >
        <section className="flex gap-10">
          <h1 id="big-header">
            recent <span id="header-spark-text">work</span>
          </h1>
          <img
            src="/brand-icons/red-round-guy.svg"
            alt="Spark Brand Icon"
            width={64}
            height={42}
          ></img>
        </section>
        <ProjectCarousel></ProjectCarousel>
      </section>

      <section
        id="work-with-spark"
        className="justify-center items-center flex flex-col mx-20 mb-40"
      >
        <section className="flex gap-10">
          <h1 id="big-header">
            work with <span id="header-spark-text">spark</span>
          </h1>
          <img
            src="/brand-icons/blue-sad-face.svg"
            alt="Spark Brand Icon"
            width={64}
            height={42}
          ></img>
        </section>
        <p className="larger-text text-center max-w-[49vw] mb-1 mx-2">
          Interested in working together or learning more? We provide
          engineering and design services, from product branding to full-stack
          web development. Most projects run for about 8 weeks, followed by a
          4-week trial period for bug fixes and small updates.
        </p>
        <section className="mt-10 mb-10 gap-5 flex">
          <button id="white-button" className="w-[170px] py-0">
            <Link href="/join">Work with Us</Link>
          </button>
          <button id="black-button" className="w-[170px] py-0">
            <Link href="/about">Contact Us</Link>
          </button>
        </section>
      </section>

      {/* <Navbar /> */}
      <section id="header-section">
        {/* the three icons emojis above we are spark */}
        <div className="header-icons"></div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
