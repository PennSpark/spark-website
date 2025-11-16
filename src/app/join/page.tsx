"use client";
import Image from "next/image";
import HeaderBanner from "../components/HeaderBanner";

import ProjectList from "./components/ProjectList";
import ProjectCarousel from "./components/ProjectCarousel";
import WhyJoin from "./components/WhyJoin";
import ApplicationForms from "./components/ApplicationForms";
import DesignResourcesPage from "./components/DesignResources";
import DevResourcesPage from "./components/DevResources";
import CareerResourcesPage from "./components/CareerResources";

export default function Projects() {
    return (
        <>
        <HeaderBanner className="bg-[#F5654E] text-white mb-20 ">
            <h1>
            Light your spark — <br></br> Join the team.
            </h1>
        </HeaderBanner>

        <section id="header-section">
            <h1>
                join <span id="header-spark-text">spark</span>
            </h1>
            <p className="description-paragraph">
                DEADLINE EXTENDED IN LIGHT OF ESAC UPDATE: Our Fall 2025 applications are now live! Applications are due on September 5th, 2025 at 5:00PM EST. If you're not sure which branch to apply to, you can learn about both Blue and Red here!
            </p>
        </section>
        <section id="header-section">Why Join?</section>
        <section className="full-width-content-section">
            <ApplicationForms />
        </section>
        <section id="header-section">Application Forms</section>
        <section className="full-width-content-section">
            <WhyJoin />
        </section>
        <section id="header-section">
            <h1>
                get <span id="header-spark-text">resources</span>
            </h1>
            <p className="description-paragraph">
                A compiled list of resources to learn about development & design.
            </p>
        </section>
        <section>
            <DesignResourcesPage />
        </section>
        <section>
            <DevResourcesPage />
        </section>
        <section>
            <CareerResourcesPage />
        </section>
        {/* <section className="content-section">
            <CommunityGrid />
        </section> */}
        </>
    );
}
