import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import study0 from "../../../../public/project-images/sp23/study0.webp";
import study1 from "../../../../public/project-images/sp23/study1.webp";
import study2 from "../../../../public/project-images/sp23/study2.webp";
import study3 from "../../../../public/project-images/sp23/study3.webp";

export const pageKey = "/spring23/studious";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <img key="d1" style={{ width: "25%" }} src={study0} />,
  <img key="d2" style={{ width: "25%" }} src={study1} />,
  <img key="d3" style={{ width: "25%" }} src={study2} />,
  <img key="d4" style={{ width: "25%" }} src={study3} />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "People in the Spark slack are always asking people to study with them. The messages are hard to keep track of, and some sessions inevitably get missed. If multiple groups are also trying to coordinate study sessions things get confusing as well. And sometimes it’s just hard to find people who are studying the same thing. ",
    ],
  },
  {
    title: "Timeline",
    content: [
      <ol key="t1">
        <li>Ideation and Requirements Gathering</li>
        <li>Mockups and Design Stage</li>
        <li>Frontend and Backend Development</li>
        <li>Integration</li>
        <li>Showcase</li>
      </ol>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>What do students look for in a study session environment?</li>
        <li>Are students open to studying with people they don’t know?</li>
        <li>What kinds of study groups are most helpful for students?</li>
        <li>Are students in need of study groups or people to study with?</li>
      </ul>,
    ],
  },
  {
    title: "Goals",
    content: [
      "Our goal is to create an accessible, easy-to-use platform that brings together and connects Penn students. It will help diversify the perspectives of the student body through new friendships, and make socializing a little easier.",
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "We plan to connect the frontend to the backend, then begin marketing the project on campus to build a userbase. ",
    ],
  },
];

export default function StudioUsPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp23-blue-studybuddies"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
