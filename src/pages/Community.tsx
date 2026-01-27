'use client'

import { assetUrl } from '../utils'

import { useState } from 'react'
import CommunityBanner from '../components/banners/CommunityBanner'
import CurrentGrid from "./community-components/CurrentGrid"
import DirectoryGrid from './community-components/DirectoryGrid'
import FormerGrid from './community-components/FormerGrid'

export default function Community() {
    const [view, setView] = useState<'current' | 'former' | 'directory'>('current');

    const handleSetView = (newView: 'current' | 'former' | 'directory') => {
        setView(newView);
    }

    return (
        <>
        <CommunityBanner
            images={[
                assetUrl("/community-images/community-1.png"),
                assetUrl("/community-images/community-3.png"),
                assetUrl("/community-images/community-4.png"),
                assetUrl("/community-images/community-5.png"),
                assetUrl("/community-images/community-6.png"),
            ]}
            className="bg-[#246DED]"
        >
            <h1>
                Driven by creativity. <br></br> Powered by community.
            </h1>
        </CommunityBanner>

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
            "cursor-pointer pill-toggle",
            "pill-toggle--yellow",
            view === "current" ? "pill-toggle--active" : "",
            ].join(" ")}
            onClick={() => handleSetView("current")}
        >
            current
        </label>

        <label
            className={[
            "cursor-pointer pill-toggle",
            "pill-toggle--red",
            view === "former" ? "pill-toggle--active" : "",
            ].join(" ")}
            onClick={() => handleSetView("former")}
        >
            former
        </label>

        <label
            className={[
            "cursor-pointer pill-toggle",
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