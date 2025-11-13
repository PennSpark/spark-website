"use client";

import React from "react";
import Link from "next/link";
import HeaderBanner from "./components/HeaderBanner";
import Image from "next/image";
import ProjectBackgroundScroll from "./components/ProjectBackgroundScroll";

import { useEffect, useState } from "react";
import ProjectCarousel from "./projects/components/ProjectCarousel";

import Title from "./components/Title";
import About from "./components/About";
import RecentWork from "./components/RecentWork";
import WorkWithUs from "./components/WorkWithUs";
import ClientsSection from "./components/ClientsSection";

export default function HomePage() {
  return (
    <>
      <Title />

      <About />

      <RecentWork />

      <WorkWithUs />

      <ClientsSection />

      {/* <Navbar /> */}
      <section id="header-section">
        {/* the three icons emojis above we are spark */}
        <div className="header-icons"></div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
