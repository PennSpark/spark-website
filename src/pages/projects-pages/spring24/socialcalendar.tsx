import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring24/socialcalendar";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://youtu.be/tV9XxxSI2pg
"
  >
    Demo here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "A convenient overview of where to eat, what to buy, and where to have fun around campus. Assist social organizations, stores, restaurants in gaining more visibility. Daily promo news \n& speedy ideas for\nweekend fun.\n\n",
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

export default function SocialCalendarPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://youtu.be/tV9XxxSI2pg
"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
