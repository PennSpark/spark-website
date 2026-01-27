// src/pages/projects-pages/spring23/catz.tsx
import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring23/catz";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://marcelkida.github.io/cats/"
  >
    Demo here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "We were tired of boring website projects. So we decided to make an all-form no function project showcasing 3D interactive scenes from the designers of Spark.",
    ],
  },
  {
    title: "Timeline",
    content: [
      <ul key="t1">
        <li>Week 1: Find inspiration</li>
        <li>Week 2: Learn Spline</li>
        <li>Week 3: Work on 3D Model</li>
        <li>Week 4: Work on 3D Model</li>
        <li>Week 5: Work on 3D Model</li>
        <li>Week 6: Work on 3D Model</li>
        <li>Week 7: Work on 3D Model</li>
        <li>Week 8: Done</li>
      </ul>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <p key="c1">
        One of the biggest challenges was just learning the new software
        (Spline). Many of us are beginners when it comes to 3D, so it was an
        ordeal to learn a completely new software in less than a semester.
      </p>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <p key="ta1">
        We learned a lot about the challenges of 3D and it was eye-opening to
        see how 3D on the web has progressed.
      </p>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      <p key="lf1">
        We are still not fully satisfied with the website’s performance, so as a
        future step, we want to further optimize the site.
      </p>,
    ],
  },
];

export default function CatzPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://marcelkida.github.io/cats/"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
