"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Title from "./components/Title";
import ProjectsCarousel from "./components/ProjectsCarousel";
import PastClients from "./components/PastClients";
import SubstackGrid from "./components/SubstackGrid";

export default function HomePage() {
  const stats = [
    { number: "58", label: "Active Members", color: "#EB5757" },
    { number: "42", label: "Projects Complete", color: "#F2C94C" },
    { number: "9", label: "Live Semesters", color: "#2F80ED" },
  ];

  return (
    <>
      <Title />
      <section className="what-we-do-section">
        <div id="header-section" className="what-we-do-header">
          <h1>
            what we <span id="header-spark-text">do</span>
          </h1>
          <p>
            Established in Spring 2021, Spark is a community of student
            developers and designers at the University of Pennsylvania that
            builds both creative and client projects.
          </p>
        </div>

        <div className="what-we-do-stats">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-box what-we-do-card"
            >
              <span
                id="header-spark-text"
                className="what-we-do-stat"
                style={{ color: stat.color }}
              >
                {stat.number}
              </span>
              <h3 className="what-we-do-label">{stat.label}</h3>
            </div>
          ))}
        </div>

        <div className="what-we-do-cta">
          <Link href="/about">
            <button aria-label="Learn more about Spark">About Us &rarr;</button>
          </Link>
        </div>
      </section>

      <section className="content-section w-full">
          <h1>
            recent <span id="header-spark-text">work</span>
          </h1>

        <ProjectsCarousel semesters={["Spring 2024"]} />
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
          <button id="white-button" className="cta-button">
            <Link href="/join">Work with Us</Link>
          </button>
          <button id="black-button" className="cta-button">
            <Link href="/about">Contact Us</Link>
          </button>
        </section>
      </section>

      <PastClients />
    </>
  );
}
