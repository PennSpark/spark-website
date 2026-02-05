"use client";

import PixelBanner from "../components/banners/PixelBanner";

import ProjectsCarousel from "../components/ProjectsCarousel";
import PastClients from "../components/PastClients";

export default function Clients() {
    return (
        <>
        <PixelBanner className="mb-20 ">
            <h1>
            Designing and building <br></br> for real impact.
            </h1>
        </PixelBanner>

        <section id="header-section">
            <h1>
                work with <span id="header-spark-text">us</span>
            </h1>
            <p>
                Interested in potentially working together or learning more? We offer a variety of engineering and design help to our clients, ranging from product branding to full-stack web applications. Our projects are generally over an 8-week period, with a 4-week trial period afterwards to fix any bugs and do minor adjustments.
            </p>
        </section>
        
        <h2>Client Projects Stories</h2>
        <section className="full-width-content-section">
            <ProjectsCarousel tags={["Client"]} />
        </section>

        <section className="content-section w-full">
            <p>
                If you&apos;re interested in working with us, feel free to shoot us an email or fill out this form and we&apos;ll reach out with more details.
            </p>
            <div className="flex flex-row gap-4 mt-6">
                <button>
                Pitch Deck
                </button>
                <button id="black-button">
                Contact Us
                </button>
            </div>
        </section>

        <section id="header-section">
            <h1>
                sponsor <span id="header-spark-text">spark</span>
            </h1>
            <p>
                Interested in sponsoring us? Please shoot us an email! Our sponsors receive exclusive benefits such as our resume book, logo being displayed on our website and social media, direct access to top engineering and design talent at Penn, and co-hosting events for Penn students.
            </p>
            <div className="w-full flex flex-row justify-center gap-4 mt-6">
                <button>
                    Sponsorship Packet
                </button>
                <button id="black-button">
                    Sponsor Us
                </button>
            </div>
            <div className="flex flex-row gap-4 mt-6"></div>
        </section>

        <PastClients />
        </>
    );
}
