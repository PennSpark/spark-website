"use client";

import { lazy, Suspense } from "react";

const BulbBanner = lazy(() => import("../components/banners/BulbBanner"));

import WhyJoin from "../components/WhyJoin";
import ApplicationForms from "./join-components/ApplicationForms";
import DesignResourcesPage from "./join-components/DesignResources";
import DevResourcesPage from "./join-components/DevResources";
import CareerResourcesPage from "./join-components/CareerResources";
import FAQ from "./join-components/FAQ";


function BannerFallback() {
    //layout placeholder while 3d loads
    return (
        <div className="w-full h-[100svh] bg-black">
            <h1 className="pointer-events-none shadow-xl">
                    Light your spark — <br /> Join the team.
            </h1>
        </div>
    );
}

export default function Join() {
    return (
        <>
        <Suspense fallback={<BannerFallback />}>
            <BulbBanner className="bg-black text-white mb-20">
            <h1 className="pointer-events-none shadow-xl">
                Light your spark — <br /> Join the team.
            </h1>
            </BulbBanner>
        </Suspense>

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

            <WhyJoin />
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
