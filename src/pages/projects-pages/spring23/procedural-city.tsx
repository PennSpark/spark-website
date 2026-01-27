import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring23/procedural-city";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <iframe
    key="v1"
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/1XRC1sz3-N8"
  ></iframe>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Procedural City is a departure from many of the web focused projects of our past, involving mainly algorithm implementation and procedural graphics work. The dev team worked on an efficient 3D implementation of the Wave Function Collapse algorithm, while the design team produced 3D assets and used a variety of procedural techniques in Houdini, Substance Painter, and Gaia to turn the raw output into a vibrant medieval town.",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had three major milestones, detailed below:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Milestone 1</strong>,
      ": Ideation and Requirements Gathering.",
      <br key="t4" />,
      <strong key="t5">Milestone 2</strong>,
      ": Developer work to produce the underlying path system.",
      <br key="t6" />,
      <strong key="t7">Final Milestone</strong>,
      ": Design work to post-process algorithm output and build the city",
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>
          Debugging the WFC implementation (and working with python's heapq)
        </li>
        <li>
          The turnaround between WFC implementation and showcase put designers in
          a time crunch
        </li>
        <li>Working with MEL/Python for Maya for the first time</li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          Pair programming can be extremely helpful for solving bugs, and can
          also be great for brainstorming new approaches.
        </li>
        <li>
          Working on 3D projects is fun, and an avenue we hope to continue
          pursuing with future projects.
        </li>
        <li>
          More time should be spent on software design at the beginning to
          ensure the correct tools are being used for the job.
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>Porting the output to 3JS to create a webview</li>
        <li>
          Iterating on the WFC implementation (special tiles, rivers, bridges)
        </li>
        <li>Adapting to different themes</li>
      </ul>,
    ],
  },
];

export default function ProceduralCityPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp23-procedural-city"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
