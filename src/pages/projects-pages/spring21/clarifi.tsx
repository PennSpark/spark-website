import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import clarifiImg from "../../../../public/project-images/sp21/clarifi-header.webp";

export const pageKey = "/spring21/clarifi";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <img key="d1" src={clarifiImg} style={{ width: "100%" }} />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Clarifi is an app to help students with ADHD get work done by limiting distractions, rewarding students with points and levels, and providing planning tools. We helped design for Clarifi, a startup creating an app to help students with ADHD get work done. We worked with their team to create a style guide for their product. Starting with a wireframe and eventually leading to an interactive prototype in FIGMA, we then designed a new user interface that streamlines their current product. Along the way, we checked in with their team frequently and got feedback from students piloting the product. We also helped develop preliminary logo designs and graphics which will continue to be developed in the future.",
      <br key="b1" />,
      <br key="b2" />,
      <strong key="b3">Technologies Used</strong>,
      ": Figma",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had three major milestones, detailed below:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Milestone 1</strong>,
      ": Wireframe and style inspiration.",
      <strong key="t4">Milestone 2</strong>,
      ": Style guide and hi-fidelity mock-up.",
      <strong key="t5">Final Milestone</strong>,
      ": Interactive prototype",
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>Adapting to a pixelated style of design</li>
        <li>Understanding the target audience of Clarifi as a non-adhd individual</li>
        <li>
          It took us a bit of time to figure out how to make the interactive
          prototype in FIGMA
        </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>Becoming more confident in our own work!</li>
        <li>
          Having many iterations of wireframes and being set on one before moving
          to higher fidelity mockups (and generally not rushing earlier stages of
          the design process)
        </li>
        <li>
          Creating components in FIGMA from the start. Building screens with
          later interactivity in mind.
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>Continuing to create graphics (avatars, achievements, etc.)</li>
        <li>Expanding user interface as the product changes</li>
        <li>Logo design</li>
      </ul>,
    ],
  },
];

export default function ClarifiPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://www.figma.com/proto/WVF5dwYCrRR9PytPgTsizr/Clarifi-Mockup?node-id=171%3A1470&scaling=scale-down&page-id=129%3A332"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
