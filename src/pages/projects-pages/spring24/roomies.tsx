import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring24/roomies";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://docs.google.com/presentation/d/1_t3blmXNCFUPB0ar9ID9Q09dHste4U0JcMnTUgmOIEk/edit?usp=sharing#slide=id.g1ec67223244_1_0
"
  >
    Slides here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "A convenient overview of where to eat, what to buy, and where to have fun around campus. Assist social organizations, stores, restaurants in gaining more visibility. Daily promo news \n& speedy ideas forAllow for a fun & easy way to co-exist!\n\nCore functionalities include: recurring tasks w/ random assignments, allow special messages for roomies, earn points & compete on a leaderboard, manage roomies (kick or invite)\n\nweekend fun.\n\n",
    ],
  },
  {
    title: "Timeline",
    content: [],
  },
  {
    title: "Challenges",
    content: [],
  },
  {
    title: "Takeaways",
    content: [],
  },
  {
    title: "Looking Forward",
    content: [],
  },
];

export default function RoomiesPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://docs.google.com/presentation/d/1_t3blmXNCFUPB0ar9ID9Q09dHste4U0JcMnTUgmOIEk/edit?usp=sharing#slide=id.g1ec67223244_1_0
"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
