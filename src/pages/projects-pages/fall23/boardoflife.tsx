import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/fall23/boardoflife";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://drive.google.com/file/d/1Ct_MiSQgFq6aSCo0qTyFwK7h4hncQZ9x/view?resourcekey
"
  >
    Slides here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Meeting management platform equipped with AI coaching. Target users: leaders, CEOs, decision makers. User selects AIs to converse with and get feedback on meetings. Personalization: use user’s background and experiences in generating personalized feedback\n\n\n",
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

export default function BoardOfLifePage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec68889e17_46_0
"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
