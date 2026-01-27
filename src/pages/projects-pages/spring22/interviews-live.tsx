import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring22/interviews-live";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <iframe
    key="v1"
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/GpVwSIa7Wpw"
  ></iframe>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Recruiting is difficult - the process could be extremely stressful and ambiguous to navigate and often end up being resource and time-consuming - and the global pandemic has made it even more so…",
      <br key="b1" />,
      <br key="b2" />,
      "Interviews.live is a smart interview prep platform designed to help students and professionals prepare for “that interview” to get their dream job. Built on a powerful web application with 460K+ real interview questions across 91K+ organizations and 100+ professions, Interviews.live provides diversified, intelligent, and automated support to users while creating a safe, accessible, and exploratory environment for preparing for their job applications and their next big interviews.",
      <br key="b3" />,
      <br key="b4" />,
      "Throughout the development period,  our team  rebranded the web application from MockingJ to interviews.live, delivering design assets (logo, color palette, typography) and mockups for existing pages consistent with the redefined website UI/UX.  We implemented an interactive, animated landing page and a Manage Applications feature for the users to organize and manage upcoming interviews.",
    ],
  },
  {
    title: "Timeline",
    content: [
      <strong key="t1">Week 0</strong>,
      <br key="t2" />,
      <ul key="t3">
        <li>Solidify project timeline with deadlines</li>
        <li>Set up GitHub</li>
        <li>Set up recurring meeting times with client and team</li>
      </ul>,
      <br key="t4" />,
      <strong key="t5">Week 1</strong>,
      <br key="t6" />,
      <ul key="t7">
        <li>Developers: user database setup</li>
        <li>
          Designer: themes (color, design, font styles) and logo, begin revamping
          UI/UX for the overall website, as well as restructure components.
        </li>
      </ul>,
      <br key="t8" />,
      <strong key="t9">Week 2</strong>,
      <br key="t10" />,
      <ul key="t11">
        <li>
          Developers: user authentication, storing questions asked upon sign up
        </li>
        <li>Designer: lo-fi mockup for landing page</li>
      </ul>,
      <br key="t12" />,
      <strong key="t13">Week 3</strong>,
      <br key="t14" />,
      <ul key="t15">
        <li>Developers: backend development manage applications page</li>
        <li>Designer: hi-fi mockup for landing page</li>
      </ul>,
      <br key="t16" />,
      <strong key="t17">Week 4</strong>,
      <br key="t18" />,
      <ul key="t19">
        <li>Developers: front-end development of landing page</li>
        <li>Designer: manage applications tab lo-fi mockup</li>
      </ul>,
      <br key="t20" />,
      <strong key="t21">Week 5</strong>,
      <br key="t22" />,
      <ul key="t23">
        <li>Spring Break — no meeting!</li>
      </ul>,
      <br key="t24" />,
      <strong key="t25">Week 6</strong>,
      <br key="t26" />,
      <ul key="t27">
        <li>Developers: front-end development manage applications page</li>
      </ul>,
      <br key="t28" />,
      <strong key="t29">Week 7</strong>,
      <br key="t30" />,
      <ul key="t31">
        <li>
          Deadline: first iteration of app with MVP features delivered to client
        </li>
      </ul>,
      <br key="t32" />,
      <strong key="t33">Week 8</strong>,
      <br key="t34" />,
      <ul key="t35">
        <li>Designer: creating Figma mock-ups of existing pages</li>
      </ul>,
      <br key="t36" />,
      <strong key="t37">Week 9</strong>,
      <br key="t38" />,
      <ul key="t39">
        <li>Developers: landing page animation</li>
        <li>Designer: continue creating Figma mock-ups of existing pages</li>
      </ul>,
      <br key="t40" />,
      <strong key="t41">Week 10</strong>,
      <br key="t42" />,
      <ul key="t43">
        <li>
          Developers: implementing manage applications page intermediate view
          only pop-up page
        </li>
        <li>
          Designer: tuning Figma mock-ups of existing pages given client
          feedback
        </li>
      </ul>,
      <strong key="t44">Week 11</strong>,
      <br key="t45" />,
      <ul key="t46">
        <li>Deadline: Deliver!</li>
      </ul>,
      <br key="t47" />,
    ],
  },
  {
    title: "Challenges",
    content: [
      "Our biggest challenges came with working out the technicalities of implementing the client’s vision. On the backend, for example, we had to decide on what types of information to store in our application and user databases. We also had to figure out what routes to include and how to navigate between them in a way consistent with the user flows we were implementing. Although our developers had experience with React, exploring and learning how to use different UI libraries to implement the frontend in accordance with the client’s vision also posed a challenge for us. Through this project our team was able to gain more experience with the technicalities of implementing a vision for a project and the integration of frontend and backend.",
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Subin K</strong>: Building upon my experiences as a PM from
          last semester, I gained more insight into how to manage a project in a
          way that is optimal to both the client and the team. Keeping track of
          deliverables, timeline, etc.
        </li>
        <li>
          <strong>Jimmy C</strong>: I gained more experience with implementing a
          Figma mock-up on the frontend as well as setting up a user database
          and authentication for the backend.
        </li>
        <li>
          <strong>Acelyn C</strong>: I got to work with different React UI
          packages for landing page design, as well as the process of
          integrating the backend and frontend.
        </li>
        <li>
          <strong>Claire Z</strong>: This was my first time designing for a
          client, and I learned how to translate their ideas into mockups.
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "The next big step  for interviews.live would be to integrate the revamped design, UI/UX, landing page, and Manage Applications feature from this project into the existing web application (MockingJ is currently under closed beta testing). Given more time, an email reminder feature for the Manage Applications page would be our priority in building on the feature we implemented.",
    ],
  },
];

export default function InterviewsLivePage() {
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
