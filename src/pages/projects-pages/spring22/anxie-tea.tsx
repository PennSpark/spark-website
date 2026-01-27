import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring22/anxietea";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      <p key="b1">
        Anxie-tea is a tea-themed mental wellness web application that serves as
        a mood tracker, anxiety tracker, and journaling app. It allows users to
        journal about their moods and feelings daily along with tracking sleep
        and anxiety symptoms. It tracks this over time, providing a calendar
        overview. Our goal is to help improve mental health and be able to track
        how you’re feeling and symptoms over time to identify common triggers or
        patterns.
        <br />
        <strong>Technologies Used</strong>: Figma, Django, HTML/CSS
      </p>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Christiana G</strong>: i need to finish the project specs
        </li>
        <li>
          <strong>Emily G</strong>: i need to finish the project specs
        </li>
        <li>
          <strong>Na Kyung L</strong>: i need to finish the project specs
        </li>
        <li>
          <strong>Sanya S</strong>: i need to finish the project specs
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: ["we should finish our project specs asap!"],
  },
];

export default function AnxieTeaPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp22-blue-AnxieTea"
      sections={sections}
    />
  );
}
