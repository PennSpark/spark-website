'use client'
import { useState } from 'react'
import Image from "next/image"
import HeaderBanner from "../components/banners/HeaderBanner"
import CurrentGrid from "./components/CurrentGrid"
import DirectoryGrid from './components/DirectoryGrid'
import FormerGrid from './components/FormerGrid'

export default function Community() {
    const [view, setView] = useState<'current' | 'former' | 'directory'>('current');

    const handleSetView = (newView: 'current' | 'former' | 'directory') => {
        setView(newView);
    }

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
        <div className="flex flex-row gap-2 justify-center">
        <label
            className={[
            "pill-toggle",
            "pill-toggle--yellow",
            view === "current" ? "pill-toggle--active" : "",
            ].join(" ")}
            onClick={() => handleSetView("current")}
        >
            current
        </label>

        <label
            className={[
            "pill-toggle",
            "pill-toggle--red",
            view === "former" ? "pill-toggle--active" : "",
            ].join(" ")}
            onClick={() => handleSetView("former")}
        >
            former
        </label>

        <label
            className={[
            "pill-toggle",
            "pill-toggle--blue",
            view === "directory" ? "pill-toggle--active" : "",
            ].join(" ")}
            onClick={() => handleSetView("directory")}
        >
            directory
        </label>
        </div>
        </section>
        <section className="content-section">
            {view === 'directory' ? <DirectoryGrid /> :
                view === 'former' ? <FormerGrid /> :
                    <CurrentGrid />
            }
        </section>
        </>
    )
}