import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring23/spark-in-photos";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <iframe
    key="v1"
    width="100%"
    height="500"
    src="https://drive.google.com/file/d/1eHqTPSOEMRTlBbQSY8b0Xdd498HsE-Ib/preview"
  ></iframe>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "In Spark, we’ve made a lot of good memories over the years, memories that we want to look back on and remember fondly. Photos have been a precious way of keeping these memories, but we wanted a way of looking back at everything Spark, all at once.\n\n      Spark-in-photos serves as our online photo album–a way of automatically collecting and showcasing all the memories within Spark (and our Slack) in one place.\n      With our slackbot constantly scraping our social channels for pics, we’re able to upload them to our cloud storage and display them in a beautiful, infinite-scrolling gallery.",
    ],
  },
  {
    title: "Timeline",
    content: [
      <ol key="t1">
        <li>Tail end of Fall 2022 - Figma Designs Created</li>
        <li>Feb 31 2023 - Backend integration with Cloudinary</li>
        <li>Mar 15 2023 - Slack bot uploads to Cloudinary</li>
        <li>Mar 25 2023 - Frontend integration</li>
        <li>Apr 1 2023 - Infinite Scroll and animations</li>
      </ol>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>
          One challenge we faced was choosing a decent photo storage cloud
          provider - one that allowed a good upload API while allowing us to
          query efficiently by date. Eventually we chose Cloudinary for its ease
          of use and easy plug-ins.
        </li>
        <li>
          Another challenge we faced was CORS issues trying to directly call
          Cloudinary from our front-end - eventually, we created a proxy NodeJS
          server to make Cloudinary calls!
        </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      "We learnt that projects can come in many shapes and forms - this project is more of an internal community gallery, and its back-bone is actually the slack bot that powers the uploads. It was a fun time getting the slack bot to work, and it’ll be just as fun programming more of them in the future. ",
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Lots of things - animations, searching by filters, facial recognition, clustering photos using ML vectorings and much more!",
    ],
  },
];

export default function SparkInPhotosPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/spark-in-photos"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
