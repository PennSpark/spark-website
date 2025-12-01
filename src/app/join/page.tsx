"use client";

import HeaderBanner from "../components/banners/HeaderBanner";

import WhyJoin from "./components/WhyJoin";
import ApplicationForms from "./components/ApplicationForms";
import DesignResourcesPage from "./components/DesignResources";
import DevResourcesPage from "./components/DevResources";
import CareerResourcesPage from "./components/CareerResources";
import FAQ from "./components/FAQ";

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
                DEADLINE EXTENDED IN LIGHT OF ESAC UPDATE: Our Fall 2025 applications are now live! Applications are due on September 5th, 2025 at 5:00PM EST. If you&apos;re not sure which branch to apply to, you can learn about both Blue and Red here!
            </p>
        </section>
        <section className="content-section w-full">
            <h3>Application Forms</h3>
            <ApplicationForms />
        </section>
        <section className="content-section w-full">
            <h3>Why Join?</h3>
            <WhyJoin />
        </section>
        <section className="content-section w-full">
            <h1>
                get <span id="header-spark-text">resources</span>
            </h1>
            <p className="description-paragraph">
                A compiled list of resources to learn about development & design.
            </p>
            <div className='w-full flex flex-col gap-8 mt-8'>
            <DesignResourcesPage />
            <DevResourcesPage />
            <CareerResourcesPage />
            </div>
        </section>
        <section className='content-section w-full'>
            <h3>FAQ</h3>
            <FAQ />
        </section>
        </>
    );
}
