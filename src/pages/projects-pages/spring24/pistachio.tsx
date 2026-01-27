import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring24/pistachio";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://github.com/PennSpark/sp24-vote-on-life
"
  >
    Github here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Pistachio is a mobile app you can foster greater interaction between students at campuses by enabling anyone to post any niche polls about the school and respond to other students polls in a fun, competitive structure.",
    ],
  },
  {
    title: "Timeline",
    content: [
      <p key="t1">
        January 2024 to April 2024
      </p>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <p key="c1">
        Optimizing database queries using pagination, making design choices that
        enhance user experience and improving responsiveness. Deploying.
      </p>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      <p key="lf1">
        Possibility of continuing Fall 2025
      </p>,
    ],
  },
];

export default function PistachioPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp24-vote-on-life
"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
