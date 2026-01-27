import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring22/artz-philly";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <iframe
    key="v1"
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/evQsy4vfxoM"
  ></iframe>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "ARTZ Philadelphia is a non-profit that enhances the quality of life for people living with dementia through joyful interactions around arts and culture. The specific initiative we worked with is  ARTZ in the Neighborhood, which provides programming for the Hunting Park and Northwest Philly neighborhoods, which are communities that are under-served and under-resourced.",
      <br key="b1" />,
      <br key="b2" />,
      "To allow for participants to more easily interact with ARTZ Philly virtually, Spark designed and developed a mobile app that simplifies the process of connecting to online programming and collects all ARTZ in the Neighborhood information in one place. We hope that this app will help reduce the barriers the ARTZ Philly community faces with connecting to online programming.",
      <br key="b3" />,
      <br key="b4" />,
      <strong key="b5">"The app’s major features include"</strong>,
      <br key="b6" />,
      "ARTZ event announcements",
      <br key="b7" />,
      "Contact info for friends in your neighborhood",
      <br key="b8" />,
      "Easy access to zoom meeting links",
      <br key="b9" />,
      "English and Spanish translations",
      <br key="b10" />,
      <br key="b11" />,
      "This app is a React Native mobile application, compatible with both iOS and Android, with a Django/postgres backend, allowing ARTZ Philly admin to update information for events and participants.",
    ],
  },
  {
    title: "Timeline",
    content: [
      <strong key="t1">Week 0</strong>,
      <br key="t2" />,
      <ul key="t3">
        <li>Draft project plan and timeline</li>
      </ul>,
      <br key="t4" />,
      <strong key="t5">Week 1</strong>,
      <br key="t6" />,
      <ul key="t7">
        <li>Development and design begins</li>
        <li>Get feedback on project plan and timeline</li>
      </ul>,
      <br key="t8" />,
      <strong key="t9">Week 2</strong>,
      <br key="t10" />,
      <ul key="t11">
        <li>Incorporate feedback from users to project plan</li>
        <li>Low-fi design mockup</li>
        <li>Boilerplate development setup</li>
      </ul>,
      <br key="t12" />,
      <strong key="t13">Week 3</strong>,
      <br key="t14" />,
      <ul key="t15">
        <li>High-fi design mockup</li>
        <li>
          Draft of meeting page, Connect with Friends, Home page functionality
        </li>
      </ul>,
      <br key="t16" />,
      <strong key="t17">Week 4</strong>,
      <br key="t18" />,
      <ul key="t19">
        <li>Get translations from ARTZ Philly team</li>
        <li>Prototype design due</li>
        <li>Draft pages done</li>
        <li>
          Draft of Announcements page, Social Media page, Contact Us Page
          functionality
        </li>
      </ul>,
      <br key="t20" />,
      <strong key="t21">Week 5</strong>,
      <br key="t22" />,
      <ul key="t23">
        <li>Spring break</li>
      </ul>,
      <br key="t24" />,
      <strong key="t25">Week 6</strong>,
      <br key="t26" />,
      <ul key="t27">
        <li>Incorporate design prototype into the draft pages</li>
        <li>Add Spanish translation feature to the app</li>
      </ul>,
      <br key="t28" />,
      <strong key="t29">Week 7</strong>,
      <br key="t30" />,
      <ul key="t31">
        <li>
          Deliver first iteration of app (with MVP features) to ARTZ Philly team
          for feedback
        </li>
      </ul>,
      <br key="t32" />,
      <strong key="t33">Week 8</strong>,
      <br key="t34" />,
      <ul key="t35">
        <li>
          Plan deploying, debugging, incorporating feedback, and stretch
          features to prioritize
        </li>
      </ul>,
      <br key="t36" />,
      <strong key="t37">Week 9 - 10</strong>,
      <br key="t38" />,
      <ul key="t39">
        <li>Debugging and stretch features</li>
      </ul>,
      <br key="t40" />,
      <strong key="t41">Week 11</strong>,
      <br key="t42" />,
      <ul key="t43">
        <li>Documentation</li>
        <li>Deliver!</li>
      </ul>,
      <br key="t44" />,
    ],
  },
  {
    title: "Challenges",
    content: [
      "React Native is different in many ways from React, which our team was more familiar with, so it was a challenge to figure out the quirks of React Native and using it and CSS to style our frontend. Using websockets to ensure real time updates of page data was also a hurdle we had to overcome. Furthermore, making sure that things didn’t break when deploying to Heroku was also a hassle.",
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Anna B</strong>: This was my first time leading a project with
          Spark, so I learned a lot about supporting a team and communicating
          with clients. It was honestly a really great experience, and I have
          the amazing people on my team and at ARTZ Philly to thank for that!
        </li>
        <li>
          <strong>Eric W</strong>: I learned so much about mobile development.
        </li>
        <li>
          <strong>Joyce H</strong>: This was my first time being the solo
          designer on a project, so I learned a lot about taking charge of the
          design of a product.
        </li>
        <li>
          <strong>Matthew C</strong>: Learned a lot about backend and mobile
          development. Was great to work with a great org and a great team!
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Deploying the app on both iOS and Android and supporting ARTZ Philly as they bring the app to their participants!",
    ],
  },
];

export default function ArtzPhillyPage() {
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
