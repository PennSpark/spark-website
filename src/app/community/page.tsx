'use client'
import Image from "next/image"
import HeaderBanner from "../components/banners/HeaderBanner"
import CommunityGrid from "./components/CommunityGrid"

export default function Community() {
    return (
        <>
        <HeaderBanner
            className="bg-[#246DED] text-white"
        >
            <h1>
                Driven by creativity. <br></br> Powered by community.
            </h1>
        </HeaderBanner>

        <section id="header-section">
            <h1><span id='header-spark-text'>spark</span> community
            </h1>
            <p className="description-paragraph">
                Community is at the center of what we do and how we work. Beyond just collaboration inside the classroom, we also strongly value the social relationships that our members share. Learn more about the people behind Spark!
            </p>
        </section>
        <section className="content-section">
            <div className='flex flex-row gap-1 justify-center'>
                <p>current</p>
                <p>former</p>
                <p>directory</p>
            </div>
        </section>
        <section className="content-section">
            <CommunityGrid />
        </section>
        </>
    )
}