'use client'
import Image from "next/image"
import HeaderBanner from "../components/HeaderBanner"
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
        <section className="full-width-content-section bg-[#246DED]">
            <Image src="/community-images/community-collage.png" alt="Community Collage" width={800} height={600} className="w-full max-w-[1000px] mb-20"/>
        </section>

        <section id="header-section">
            <h1><span id='header-spark-text'>spark</span> community
            <Image src="/brand-icons/blue-neutral-face.svg" alt="Spark Community Icon" width={42} height={42} className="mt-5 bottom-0 inline-block ml-3 mb-3.5"/>
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