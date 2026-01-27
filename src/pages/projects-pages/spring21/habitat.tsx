import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import habitatImg from "../../../static/img/sp21/habitat-header.png";

export const pageKey = "/spring21/habitat";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <img key="d1" src={habitatImg} style={{ width: "100%" }} />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      <p key="b1">
        Level up your Penn squirrel by completing habits! Penn Habitat is a
        productivity app that can help you manage tasks and set up your day. By
        completing tasks, you can customize your character and see your squirrel
        evolve into the quintessential Penn student.
      </p>,
    ],
  },
  {
    title: "Timeline",
    content: [
      <strong key="t1">Milestone 1</strong>,
      <ul key="t2">
        <li>Present a rough sketch of the habit tracker’s main window.</li>
      </ul>,
      <strong key="t3">Milestone 2</strong>,
      <ul key="t4">
        <li>
          Implement add/delete features to the habit trackers, create background
          theme.
        </li>
      </ul>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>Having all developers set up Firebase properly</li>
        <li>Attendance and engagement in meetings in a virtual setting</li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>Learned a lot about the basics of iOS Development</li>
        <li>Worked with Firebase and SwiftUI</li>
        <li>
          "It was great learning in and working with Figma! Also, it was very
          cool seeing my designs come to life" - Julia Deng
        </li>
        <li>
          “I put myself in the designer mindset for the first time and it was a
          lot of fun!” - Karen Zheng
        </li>
        <li>
          "Learning Swift for the first time and working as a team was awesome!
          Learned some really useful stuff while surrounded by great people!” -
          Leon Hertzberg
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>Adding more features to habits, such as repeating a habit.</li>
      </ul>,
    ],
  },
];

export default function HabitatPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennCreativeLabs/sp21-habitat"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
