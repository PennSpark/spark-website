"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Title from "./components/Title";
import ProjectCarousel from "./projects/components/ProjectCarousel";
import PastClients from "./components/PastClients";
import SubstackGrid from "./components/SubstackGrid";

export default function HomePage() {
  return (
    <>
      <Title />
        <section  id="header-section">
          <h1>
            what we <span id="header-spark-text">do</span>
          </h1>
          <p>
            Established in Spring 2021, Spark is a community of student developers
            and designers at the University of Pennsylvania that builds both
            creative and client projects.
          </p>
        </section>

        <section className="content-section w-full">
          <div className="w-full max-w-2xl flex flex-row gap-2 justify-between mb-10">
            <div
              className="w-50 h-50 pb-2 gap-2 border-box
                flex flex-col items-center justify-center font-sans
              "
            >
              <span id="header-spark-text" className="text-[72px] md:text-[96px]" style={{color: '#EB5757'}}>
                58
              </span>
              <h3>
                Active Members
              </h3>
            </div>

            <div
              className="
                w-50 h-50 pb-2 gap-2 border-box
                flex flex-col items-center justify-center font-sans
              "
            >
              <span id="header-spark-text" className="text-[72px] md:text-[96px]" style={{color: '#F2C94C'}}>
                42
              </span>
              <h3>
                Projects Complete
              </h3>
            </div>

            <div
              className="
                w-50 h-50 pb-2 gap-2 border-box
                flex flex-col items-center justify-center font-sans
              "
            >
              <span id="header-spark-text" className="text-[72px] md:text-[96px]" style={{color: '#2F80ED'}}>
                9
              </span>
              <h3>
                Live Semesters
              </h3>
            </div>
          </div>
          <button>
            <Link href="/about">About Us &rarr;</Link>
          </button>
        </section>

      <section className="content-section w-full">
          <h1>
            recent <span id="header-spark-text">work</span>
          </h1>

        <ProjectCarousel />
      </section>

      <SubstackGrid />

      <section className="content-section w-full">
        <h1>
          work with <span id="header-spark-text">spark</span>
        </h1>
        <p>
          Interested in working together or learning more? We provide engineering
          and design services, from product branding to full-stack web
          development. Most projects run for about 8 weeks, followed by a 4-week
          trial period for bug fixes and small updates.
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

      <PastClients />
    </>
  );
}
