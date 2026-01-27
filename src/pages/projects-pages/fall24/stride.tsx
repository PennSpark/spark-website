import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/fall24/stride";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://drive.google.com/file/d/1kXokGZT3RoNulTmXKC_fSRpETctT5EmQ/view?resourcekey

"
  >
    Demo here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Stride is an app that encourages users to travel sustainably around Philadelphia by finding the fastest walking, cycling, and SEPTA (the Philly transit system) routes between waypoints. Users can log the trips they make with our app to calculate how much CO2 emissions they’ve saved by traveling sustainably, as well as view how much CO2 their friends have saved.",
    ],
  },
  {
    title: "Timeline",
    content: [
      <ul key="t1">
        <li>
          Reach out to Delaware Valley Regional Planning Commission (DVRPC) and
          Clean Air Council (CAC) to conduct stakeholder interviews
        </li>
        <li>Formalize MVP requirements and tech stack</li>
        <li>Create lo-fi designs and backend routes</li>
        <li>
          Progress lo-fi designs to hi-fis and build out the backend and database
        </li>
        <li>Start building the frontend</li>
        <li>
          Finalize hi-fi designs and implement them on the frontend; have working
          API calls for the backend
        </li>
        <li>Frontend-backend integration</li>
        <li>
          Showcase and present our work to stakeholders for advice on future work
        </li>
      </ul>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li> </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          When planning a project with a lot of ideated features, it's important
          to know which features to prioritize for your MVP first.
        </li>
        <li>
          User research and stakeholder interviews are key for developing useful
          products
        </li>
        <li>Leave lots of time for frontend-backend integration</li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [<p key="lf1">Deploy a stable build and start getting user feedback</p>],
  },
];

export default function StridePage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://drive.google.com/file/d/1kXokGZT3RoNulTmXKC_fSRpETctT5EmQ/view?resourcekey

"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
