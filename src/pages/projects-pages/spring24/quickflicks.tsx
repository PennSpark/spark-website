import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring24/quickflicks";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://github.com/PennSpark/sp24-blue-quickflicks
"
  >
    Github here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Tired of the same Mini NYTs, Wordles, etc?\nWant to show off your cinephile side?\nInterested in having your interest piqued in new movies?\nQuickFlicks serves all your movie-lover needs!",
    ],
  },
  {
    title: "Timeline",
    content: [
      <ul key="t1">
        <li>
          Week 1 (1/22-1/28): Set up Github repo and Figma, review resources for
          mentors and other helpful people
        </li>
        <li>Week 2 (1/29-2/4): Designers: ideation, user flow</li>
        <li>
          Week 3 (2/5 - 2/11) : Developers: frontend and backend connection,
          Designers: lo-fi mockup for landing page and connections game
        </li>
        <li>
          Week 4 (2/12 - 2/18): Developers: frontend landing page, frontend
          connections game, Designers: hi-fi mockup for landing page and
          connections page, lo-fi mockup user page and leadership page
        </li>
        <li>
          Weeks 5 & 6 (2/26 - 3/3): Developers: backend connections page,
          Designers: hi-fi mockups for user page and leadership page
        </li>
        <li>
          Week 7 (3/4 - 3/10): Developers: frontend user page, frontend
          leaderboard, user database setup, user authentication, Designers: hi-fi
          mockup for marketplace page, any remaining hi-fis
        </li>
        <li>
          Week 8 (3/11 - 3/17): Developers: frontend user page, frontend
          leaderboard, user database setup, user authentication, Designers: hi-fi
          mockup for marketplace page, any remaining hi-fis
        </li>
        <li>
          Week 9 (3/18 - 3/24): Developers: user database setup, user
          authentication cont., integration with database (sign-in, scores are
          saved, leaderboard with other users), Designers: hi-fi updates based on
          midpoint feedback
        </li>
        <li>
          Week 10 (3/25 - 3/31): Developers: integration with database (sign-in,
          scores are saved, leaderboard with other users) cont., Designers: hi-fi
          updates based on midpoint feedback
        </li>
        <li>
          Week 11 (4/1 - 4/7): Developers: update styling based on new hi-fis,
          finish features/styling, Designers: hi-fi updates on midpoint feedback
        </li>
        <li>Weeks 12 & 13 (4/8 - 4/21): Deployment</li>
        <li>Week 14 (4/22 - 4/29): SHOWCASE! </li>
      </ul>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <p key="c1">
        Struggling to get the IMDb API calls to work.
      </p>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <p key="ta1">
        Working around our struggles while still being able to achieve our MVPs.
      </p>,
    ],
  },
];

export default function QuickFlicksPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp24-blue-quickflicks
"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
