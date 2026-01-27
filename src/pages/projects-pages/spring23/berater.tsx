import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import roadmap from "../../../../public/project-images/sp23/berater-roadmap.png";
import demo from "../../../../public/project-images/sp23/berater-demo.jpg";

export const pageKey = "/spring23/berater";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <img key="d1" style={{ width: "100%" }} src={demo} />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "We thought normal productivity apps were either too boring or do not have enough incentives for people to carry out their tasks. We came up with ways to gamify and add a mean twist to productivity apps. Berater is a productivity app that sends them harmless berating notifications for various tasks that they have to complete and rewards them for completing the tasks.",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project roadmap:",
      <br key="t1" />,
      <img key="t2" style={{ width: "100%" }} src={roadmap} />,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>Do insults motivate people?</li>
        <li>If so, what kind of people do they motivate?</li>
        <li>
          What kind of tasks do people need help accomplishing, as in what tasks
          do people tend to procrastinate?
        </li>
        <li>
          Would people download an app if they knew they’d be constantly
          insulted?
        </li>
        <li>
          How much balance is a healthy balance between positive and negative
          reinforcement?
        </li>
      </ul>,
    ],
  },
  {
    title: "Goals",
    content: [
      "The project aims to increase the productivity, health, and general well being of its users, acknowledging that sometimes people function better under different forms of motivation. Particularly with students who procrastinate on assignments or people who want to be healthier, sometimes intrinsic motivation isn’t enough. We recommend that users use this app only if they believe that negative reinforcement will motivate them. ",
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "We look forward to researching the concept of negative reinforcements more, and finding ways to incorporate it into our project to make it a unique way to gamify daily tasks and promote productivity. We also look forward to tackling the technical challenges of implementing this tasks on mobile or website platforms, and marketing the project towards the student community.",
    ],
  },
];

export default function BeraterPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp23-blue-berater"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
