import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import review from "../../../../public/project-images/sp23/findmefood-review.webp";
import ranking from "../../../../public/project-images/sp23/findmefood-reviewers.webp";
import post from "../../../../public/project-images/sp23/findmefood-post.webp";

export const pageKey = "/spring23/find-me-food";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <img key="d1" style={{ width: "33%" }} src={review} />,
  <img key="d2" style={{ width: "33%" }} src={ranking} />,
  <img key="d3" style={{ width: "33%" }} src={post} />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "The motivation behind our project was the lack of a reliable, go-to resource for food trucks on campus. Google and Yelp were places where you can discover old and new food trucks, but they are not always super updated and/or easy to use.",
    ],
  },
  {
    title: "Timeline",
    content: [
      <ol key="t1">
        <li>Ideation and Requirements Gathering</li>
        <li>Mockups and Design Stage</li>
        <li>Frontend and Backend Development</li>
        <li>Integration</li>
        <li>Showcase</li>
      </ol>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>What features matter in a food truck app?</li>
        <li>
          How can we collect data from students and enable them to provide
          feedback to improve the app?{" "}
        </li>
        <li>
          What factors contribute to the quality of a food truck? (price, wait
          times, etc.)
        </li>
        <li>
          What makes a user review of dining credible? How to maintain and
          enforce credibility?
        </li>
        <li>
          What are the best ways the app can support local businesses and food
          truck owners?
        </li>
        <li>
          How can food truck owners best promote their businesses using location
          tracking features?
        </li>
      </ul>,
    ],
  },
  {
    title: "Goals",
    content: [
      "The goal of our project is to create an updated, community-involved application where students can review, search, and even represent our local food trucks. We also wanted to create an easy-to-use app that allows students to support local businesses and find food trucks that they will love! ",
    ],
  },
  {
    title: "Looking Forward",
    content: ["To working with the community to create the best app possible!"],
  },
];

export default function FindMeFoodPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp23-blue-FindMeFood"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
