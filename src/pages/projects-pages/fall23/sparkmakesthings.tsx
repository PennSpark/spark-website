import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/fall23/sparkmakesthings";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec680f5ed9_3_5
"
  >
    Slides here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "In order to explore new opportunities to design, create, and build; we decided to create a creator’s project this semester. Our project members were given the freedom of tackling different problems in life and reimagining how these products could be produced. All of these projects were possible by exploring skillsets outside of programming and web development. These ranges from CAD, laser cutting, building circuits, and casting! From small home decors to electric-circuit cars, let’s hear about the design processes from each project team and feel free to come check out the products after the presentation!\n\n\n\n",
    ],
  },
  {
    title: "Timeline",
    content: [
      <div key="t1">
        <p>Ideate:</p>
        <ul>
          <li>Didn’t want to make web project</li>
          <li>
            Got more into racing – wanted to make a mini mario kart/rally car
          </li>
        </ul>
        <p>Design:</p>
        <ul>
          <li>Preliminary design made using OnShape</li>
          <li>Electrical setup was more prototyping based </li>
        </ul>
        <p>Manufacture:</p>
        <ul>
          <li>Plate-like components are laser cut at Tangen</li>
          <li>Everything else is 3d printed</li>
        </ul>
      </div>,
    ],
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

export default function SparkMakesThingsPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec680f5ed9_3_5
"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
