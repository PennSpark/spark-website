import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import penntitionsImg from "../../../../public/project-images/sp21/penntitions-header.webp";

export const pageKey = "/spring21/penntitions";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [<img key="d1" src={penntitionsImg} style={{ width: "100%" }} />];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      <p key="b1">
        Last semester, Math 104 students tried to petition for more course
        resources. Their petition was held on change.org and garnered over 500
        signatures. However, it was rejected by the Penn Administration, which
        stated that petitions from third-party websites are prone to be signed by
        non-Penn students. To address this issue, we created Penntitions, a
        website in which only Penn students can access. In it, students can
        start, sign, and share petitions. This will allow them to make their
        voices heard and to push for greater changes.
      </p>,
    ],
  },
  {
    title: "Timeline",
    content: [
      <strong key="t1">Milestone 1</strong>,
      <ul key="t2">
        <li>Design the website.</li>
      </ul>,
      <strong key="t3">Milestone 2</strong>,
      <ul key="t4">
        <li>Program website logic/functionality.</li>
      </ul>,
      <strong key="t5">Final Milestone</strong>,
      <ul key="t6">
        <li>Finalized website and minor details.</li>
      </ul>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>
          Technical difficulties - when we tried to run and test the project,
          nothing would show up. The entire team looked up and tried different
          solutions and we solved this problem together.
        </li>
        <li>
          Coordinating with Penn Administration to get access to PennInTouch and
          PennKey APIs.
        </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          Development process of a web application - since most members do not
          have any web dev experience, this was a good and meaningful
          introduction to web application development, starting from the
          development process, version control with Github, and learning how to
          use React, Tailwind, etc.
        </li>
        <li>
          Version control with Github -- Merge, Creating branches, moving
          branches
        </li>
        <li>React</li>
        <li>NPM </li>
        <li>Tailwind</li>
        <li>Figma</li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>Ading files and images when creating a petition page.</li>
        <li>Add location for petitions.</li>
        <li>Filter and recommend petitions based on school and major.</li>
      </ul>,
    ],
  },
];

export default function PenntitionsPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennCreativeLabs/sp21-penntitions"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
