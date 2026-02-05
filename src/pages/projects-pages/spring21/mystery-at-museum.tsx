import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import mysteryMuseumImg from "../../../../public/project-images/sp21/mystery-museum-header.webp";

export const pageKey = "/spring21/mystery-at-museum";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [<img key="d1" src={mysteryMuseumImg} style={{ width: "100%" }} />];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      <p key="b1">
        We made the “rooms” using frames and added assets by manipulating the
        shape tool. We then created a narrative that utilized objects in our
        rooms. We used Notion links embedded in the rooms throughout the process
        as a “clues” page that guides the players. There were a series of 3 clues
        pages that led to three “challenges” the player had to solve in order to
        escape the room.
      </p>,
    ],
  },
  {
    title: "Timeline",
    content: [
      <strong key="t1">Milestone 1</strong>,
      ": Thinking up of our own narrative for the escape room and visualizing what each room would look like after playing an existing online one for inspiration",
      <strong key="t2">Milestone 2</strong>,
      ": Thinking up of our own narrative for the escape room and visualizing what each room would look like after playing an existing online one for inspiration",
      <strong key="t3">Final Milestone</strong>,
      ": Straightening out the logic of the game flow",
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>
          Figuring how to organize frames and components when working with
          multiple elements
        </li>
        <li>
          Coming up with the strategy for the game flow (ex: structuring it to
          prevent player from being able to skip across challenges before first
          solving previous challenge)
        </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          As a beginner with Figma, the project made me more comfortable with
          using different features in Figma such as grouping components
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>Adding more complexity to challenges.</li>
        <li>
          Applying the swap instances Figma feature to do things like open/close
          objects.
        </li>
      </ul>,
    ],
  },
];

export default function MysteryAtMuseumPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://www.figma.com/file/nj4SVpqmJ6IHxxVVgnLtUe/Art-Heist-Escape-Room?node-id=0%3A1"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
