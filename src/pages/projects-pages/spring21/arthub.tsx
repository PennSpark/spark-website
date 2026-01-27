import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import arthubImg from "../../../../public/project-images/sp21/arthub-header.png";

export const pageKey = "/spring21/arthub";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [<img key="d1" src={arthubImg} style={{ width: "100%" }} />];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      <ul key="b1">
        <li>
          Portfolio-building and social platform where users can upload their art
          and provide commissions, and where recruiters go to find and recruit
          talent.
        </li>
        <li>
          Aimed towards student artists, recruiters, and consumers looking for
          affordable and personalized artwork.
        </li>
        <li>
          Web application built with NodeJS, ExpressJS, handlebars (frontend) and
          MongoDB (backend):
          <ul>
            <li>Handlebars used for HTML formatting.</li>
            <li>Multer (Node.JS middleware) used to support multiple image processing.</li>
            <li>MongoDB schemas for images, info, and account info.</li>
          </ul>
        </li>
      </ul>,
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had three major milestones, detailed below:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Milestone 1</strong>,
      <ul key="t4">
        <li>
          Have a wireframe of the pages and basic features, as well as a list of
          frontend/backend programs necessary to build the project (MERN stack +
          user security?)
        </li>
      </ul>,
      <strong key="t5">Milestone 2</strong>,
      <ul key="t6">
        <li>Creating a MVP that supports image uploads and a login screen.</li>
        <li>Finalizing logo design and implementing onto application.</li>
      </ul>,
      <strong key="t7">Final Milestone</strong>,
      <ul key="t8">
        <li>
          Finalizing specific functions (i.e. adding descriptions, names,
          supporting different file types).
        </li>
        <li>Finalizing frontend design.</li>
      </ul>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>Smaller team = more work and knowledge required per team member</li>
        <li>Picking up new frontend and backend languages (Handlebars, Multer, MongoDB)</li>
        <li>Working with busy schedules (midterms and finals)</li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>Teamwork is dream work!</li>
        <li>
          Setting ambitious goals are okay but it is important to pivot and think
          realistically given different circumstances.
        </li>
        <li>Learning new languages from scratch can be very challenging but rewarding.</li>
        <li>It’s important to take breaks and check in with your team members outside of work.</li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>Improving features and and the UI.</li>
        <li>Implementing more concepts learned in class and workshops.</li>
        <li>Testing the app with real students and deploying the application to the public.</li>
      </ul>,
    ],
  },
];

export default function ArthubPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennCreativeLabs/sp21-arthub"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
