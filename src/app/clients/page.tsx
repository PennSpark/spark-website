"use client";

import HeaderBanner from "../components/HeaderBanner";

import ClientProjectCarousel from "./components/ClientProjectsCarousel";
import ClientCTA from "./components/ClientCTA";
import SponsorButtons from "./components/SponsorButtons";
import PastClients from "./components/PastClients";

export default function Projects() {
    return (
        <>
        <HeaderBanner className="bg-[#F5654E] text-white mb-20 ">
            <h1>
            Designing and building <br></br> for real impact.
            </h1>
        </HeaderBanner>

        <section id="header-section">
            <h1>
                work with <span id="header-spark-text">us</span>
            </h1>
            <p className="description-paragraph">
                Interested in potentially working together or learning more? We offer a variety of engineering and design help to our clients, ranging from product branding to full-stack web applications. Our projects are generally over an 8-week period, with a 4-week trial period afterwards to fix any bugs and do minor adjustments.
            </p>
        </section>
        <section id="header-section">Client Projects Stories</section>
        <section className="full-width-content-section">
            <ClientProjectCarousel />
        </section>
        <section>
            <ClientCTA />
        </section>
        <section id="header-section">
            <h1>
                sponsor <span id="header-spark-text">spark</span>
            </h1>
            <p className="description-paragraph">
                Interested in sponsoring us? Please shoot us an email! Our sponsors receive exclusive benefits such as our resume book, logo being displayed on our website and social media, direct access to top engineering and design talent at Penn, and co-hosting events for Penn students.
            </p>
            <SponsorButtons />
        </section>
        <section>
            <PastClients />
        </section>
        </>
    );
}
