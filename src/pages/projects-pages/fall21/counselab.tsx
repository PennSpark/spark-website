import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import counselabHeader from "../../../static/img/fa21/counselab-header.png";

export const pageKey = "/fall21/counselab";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <img key="h1" src={counselabHeader} style={{ width: "100%" }} />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "We worked on building a user-facing web application for our client Counselab which is a platform that allows users to offer and seek 1:1 advising sessions on any topic they want. On the website, we created a few static pages as well as a user profile page. The static pages include landing page, about page, team page, and contact form. The user profile page has a component that displays all the user information such as education and social media links as well as a component that displays a calendar that shows when the user is available. Rachel designed the website and its components using Figma. Marcel and Alex coded the front end application based on the UI mockups.",
      <br key="b1" />,
      <br key="b2" />,
      <strong key="b3">Technologies Used</strong>,
      ": React, JavaScript, HTML, CSS",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had the following timeline:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Week 1</strong>,
      ": Meet with client, figure out MVP",
      <br key="t4" />,
      <strong key="t5">Week 2</strong>,
      ": Created Mockup UI",
      <br key="t6" />,
      <strong key="t7">Week 3</strong>,
      ": Completed landing page",
      <br key="t8" />,
      <strong key="t9">Week 4</strong>,
      ": Completed about us",
      <br key="t10" />,
      <strong key="t11">Week 5</strong>,
      ": Completed team page and contact form",
      <br key="t12" />,
      <strong key="t13">Week 6</strong>,
      ": Created Mockup for individual user profiles",
      <br key="t14" />,
      <strong key="t15">Week 7</strong>,
      ": Completed user information page",
      <br key="t16" />,
      <strong key="t17">Week 8</strong>,
      ": Completed Calendar integration to allow for users to book times with other users",
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>
          One technical challenge we encountered was making the website
          responsive. We had to follow the mockups which often did not have the
          same information as the desktop view.
        </li>
        <li>
          Another technical challenge we faced was implementing the calendar
          functionality. It was complex since we had to work with an api and
          minimize the number of api calls as possible.
        </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Marcel K</strong>: I think I significantly improved my frontend
          development skills. I also learned how to communicate with a designer
          and articulate the feasibility of features.
        </li>
        <li>
          <strong>Alex Z</strong>: This was my first time working on a team to
          create a product that hundred of others would use. I learned a lot
          about communication as well as how to talk to clients.
        </li>
        <li>
          <strong>Rachel P</strong>: This was a great opportunity to work with
          multiple stakeholders, the co-founders and the customers, so my
          communication skills have definitely evolved. This was also a great
          way to feel the energy, demand, and strategy of a startup.
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>Being able to set up accounts directly on the website</li>
        <li>
          Conduct user research into the onboarding process of the mobile app to
          make it more efficient and user-friendly
        </li>
        <li>Adjust some design elements of the website</li>
      </ul>,
    ],
  },
];

export default function CounselabPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
