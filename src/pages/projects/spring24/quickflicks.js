import React from "react"
import ProjectLayout from "/src/components/projects/spring24/sp24-project-layout.js"
import "semantic-ui-css/semantic.min.css"

import header from "/public/static/projects/header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="QuickFlicks"
      projName={[<span style={{ color: "black" }}>QuickFlicks</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://github.com/PennSpark/sp24-blue-quickflicks
"
        >
          Github here!
        </a>,
      ]}
      sourcecodeUrl="https://github.com/PennSpark/sp24-blue-quickflicks
"
      isCodingProject="True"
      people="Raphael Renzo Martinez, Xue Jiang, Fiona Herzog"
      background="Tired of the same Mini NYTs, Wordles, etc?
Want to show off your cinephile side?
Interested in having your interest piqued in new movies?
QuickFlicks serves all your movie-lover needs!"
      timeline={[
        <ul>
          <li>Week 1  (1/22-1/28): Set up Github repo and Figma, review resources for mentors and other helpful people
</li>
          <li>Week 2 (1/29-2/4): Designers: ideation, user flow          </li>
          <li>Week 3 (2/5 - 2/11) : Developers: frontend and backend connection, Designers: lo-fi mockup for landing page and connections game
</li>
          <li>Week 4 (2/12 - 2/18): Developers: frontend landing page, frontend connections game, Designers: hi-fi mockup for landing page and connections page, lo-fi mockup user page and leadership page
</li>
          <li>Weeks 5 & 6 (2/26 - 3/3): Developers: backend connections page, Designers: hi-fi mockups for user page and leadership page
</li>
          <li>Week 7 (3/4 - 3/10): Developers: frontend user page, frontend leaderboard, user database setup, user authentication, Designers: hi-fi mockup for marketplace page, any remaining hi-fis 
</li>
<li>Week 8 (3/11 - 3/17): Developers: frontend user page, frontend leaderboard, user database setup, user authentication, Designers: hi-fi mockup for marketplace page, any remaining hi-fis 
</li>
          <li>Week 9 (3/18 - 3/24): Developers: user database setup, user authentication cont.,  integration with database (sign-in, scores are saved, leaderboard with other users), Designers: hi-fi updates based on midpoint feedback
</li>
          <li>Week 10 (3/25 - 3/31): Developers: integration with database (sign-in, scores are saved, leaderboard with other users) cont., Designers: hi-fi updates based on midpoint feedback
</li>
          <li>Week 11 (4/1 - 4/7): Developers: update styling based on new hi-fis, finish features/styling, Designers: hi-fi updates on midpoint feedback
</li>
          <li>Weeks 12 & 13 (4/8 - 4/21): Deployment</li>
          <li>Week 14 (4/22 - 4/29): SHOWCASE! </li>
        </ul>,
      ]}
      challenges={[
        <p>
          Struggling to get the IMDb API calls to work.

        </p>,
      ]}
      takeaways={[
        <p>
            Working around our struggles while still being able to achieve our MVPs. 
        </p>,
      ]}
    ></ProjectLayout>
  )
}
