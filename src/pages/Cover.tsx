"use client";

import { Link } from "react-router-dom";

import Title from "../components/cover-components/Title";
import ProjectsCarousel from "../components/ProjectsCarousel";
import PastClients from "../components/PastClients";
import PointerBox from "../components/ui-elements/PointerBox";
import RevealNumber from "../components/ui-elements/RevealNumber";
import SubstackGrid from "../components/cover-components/SubstackGrid";

import { contributors } from "../data/contributors";

export default function Cover() {
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
            <PointerBox color="#EB5757" className="px-2 py-4 md:px-6 md:py-6rounded-xl">
              {({ clipPath }) => (
                <div> 
                  <RevealNumber
                    value={58}
                    clipPath={clipPath}
                    baseColor="#EB5757"
                    className="text-[60px] md:text-[96px]"
                  />
                  <h3 className="mt-2 text-black">Active Members</h3>
                </div>
              )}
            </PointerBox>

            <PointerBox color="#F2C94C" className="px-2 py-4 md:px-6 md:py-6rounded-xl">
              {({ clipPath }) => (
                <div>
                  <RevealNumber
                    value={42}
                    clipPath={clipPath}
                    baseColor="#F2C94C"
                    className="text-[60px] md:text-[96px]"
                  />
                  <h3 className="mt-2 text-black">Projects Complete</h3>
                </div>
              )}
            </PointerBox>

            <PointerBox color="#2F80ED" className="px-2 py-4 md:px-6 md:py-6rounded-xl">
              {({ clipPath }) => (
                <div>
                  <RevealNumber
                    value={9}
                    clipPath={clipPath}
                    baseColor="#2F80ED"
                    className="text-[60px] md:text-[96px]"
                  />
                  <h3 className="mt-2 text-black">Live Semesters</h3>
                </div>
              )}
            </PointerBox>
          </div>


          <button>
            <Link to="/about">About Us &rarr;</Link>
          </button>
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
          <button id="white-button">
            <Link to="/join">Work with Us</Link>
          </button>
          <button id="black-button">
            <Link to="/about">Contact Us</Link>
          </button>
        </section>
      </section>
      <PastClients />

      <section className='content-section w-full'>
        <p className='bold mb-5'>
          Thank you for visiting! <br/> We would like to thank current & past contributors to Spark&apos;s website, including:
        </p>
        <ul className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 mb-4 text-xs'>
         {contributors.map((contributor) => (
          <li key={contributor}>
            {contributor}
          </li>
         ))}
        </ul>

      </section>
    </>
  );
}
