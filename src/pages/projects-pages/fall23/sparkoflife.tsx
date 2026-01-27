import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/fall23/sparkoflife";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://www.youtube.com/watch?v=jmo1LZdjwf0&embeds_referring_euri=https%3A%2F%2Fdocs.google.com%2F&embeds_referring_origin=https%3A%2F%2Fdocs.google.com&source_ve_path=Mjg2NjY&themeRefresh=1
"
  >
    Slides here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Our team wanted to put together an exhibit capturing the different stages of life through interesting digital exhibits. We’ve created four different digital artifacts, each meant to capture a different stage of life, starting from infancy and going to adulthood. All of these will be in display in the side room after the presentation, so please go check them out!\n\n\n\n\n",
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

export default function SparkOfLifePage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec680f5ed9_0_0
"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
