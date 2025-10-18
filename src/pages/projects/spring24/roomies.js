import React from "react"
import ProjectLayout from "/src/components/projects/spring24/sp24-project-layout.js"
import "semantic-ui-css/semantic.min.css"

import header from "/public/static/projects/header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Roomies"
      projName={[<span style={{ color: "black" }}>Roomies</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://docs.google.com/presentation/d/1_t3blmXNCFUPB0ar9ID9Q09dHste4U0JcMnTUgmOIEk/edit?usp=sharing#slide=id.g1ec67223244_1_0
"
        >
          Slides here!
        </a>,
      ]}
      demoUrl="https://docs.google.com/presentation/d/1_t3blmXNCFUPB0ar9ID9Q09dHste4U0JcMnTUgmOIEk/edit?usp=sharing#slide=id.g1ec67223244_1_0
"
      isCodingProject="True"
      people="Gabriel Thiessen, Luna Chen, Raelynn Cui, Mary Liu
"
      background="A convenient overview of where to eat, what to buy, and where to have fun around campus. Assist social organizations, stores, restaurants in gaining more visibility. Daily promo news 
& speedy ideas forAllow for a fun & easy way to co-exist!

Core functionalities include: recurring tasks w/ random assignments, allow special messages for roomies, earn points & compete on a leaderboard, manage roomies (kick or invite)

weekend fun.

"
      timeline={[
      ]}
      challenges={[
        
      ]}
      takeaways={[ ]}
      lookingForward={[
      ]}
    ></ProjectLayout>
  )
}
