import React from "react"
import ProjectLayout from "/src/components/projects/spring24/sp24-project-layout.js"
import "semantic-ui-css/semantic.min.css"

import header from "/public/static/projects/header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="SocialCalendar@PENN"
      projName={[<span style={{ color: "black" }}>SocialCalendar@PENN</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://youtu.be/tV9XxxSI2pg
"
        >
          Demo here!
        </a>,
      ]}
      demoUrl="https://youtu.be/tV9XxxSI2pg
"
      isCodingProject="True"
      people="Jasmine Wang, Luke Tong, Joseph Dattilo, Megan Yang, Andre van de Ven, Ani Nguyen Le, Fiona Jiang, Michael Li, Cindy Wei
"
      background="A convenient overview of where to eat, what to buy, and where to have fun around campus. Assist social organizations, stores, restaurants in gaining more visibility. Daily promo news 
& speedy ideas for
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
