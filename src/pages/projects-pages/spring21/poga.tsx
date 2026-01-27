import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import pogaImg from "../../../static/img/sp21/poga-header.png";

export const pageKey = "/spring21/poga";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [<img key="d1" src={pogaImg} style={{ width: "100%" }} />];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Want to start off your day right? Start it off by spending time with your plant-friend doing a yoga or meditation session, which will log your time and movements to give you the power to grow your plant-friend and you alongside it! Our AI-powered website will be able to monitor your progression through yoga workouts while you accumulate points and share your progress with friends.",
    ],
  },
  {
    title: "Timeline",
    content: [
      <strong key="t1">Milestone 1</strong>,
      <ul key="t2">
        <li>
          Layout the foundations of the website and project and readjust any
          features accordingly.
        </li>
        <li>
          Have a rough outline of the website with basic features already
          created
        </li>
      </ul>,
      <strong key="t3">Milestone 2</strong>,
      <ul key="t4">
        <li>
          Finish the working TensorFlow.js application that will able to
          differentiate between poses
        </li>
        <li>
          Finish the basic functionality of the web pages and begin working on
          the appearances
        </li>
      </ul>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>Generating the data from pose estimation</li>
        <li>Creating the CNN model</li>
        <li>Working on firebase connection</li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>Integrating the machine learning into our website</li>
        <li>Firebase was a little difficult to integrate into the site</li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>
          Adding more social media features (sharing onto facebook, instagram,
          etc)
        </li>
        <li>Adding friends</li>
        <li>Favoriting exercises and adding more yoga poses</li>
      </ul>,
    ],
  },
];

export default function PogaPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennCreativeLabs/sp21-poga"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
