import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/fall23/sparkify";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec68889e17_27_82
"
  >
    Slides here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "We wanted to make a moodboard for music by visualizing your music taste and creating shareable experiences. Our designers broke down the process of creating a collage, and our devs built an algorithm based on the process\n\n\n\n",
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

export default function SparkifyPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec68889e17_27_82
"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
