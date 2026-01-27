import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import popplexHeader from "../../../../public/project-images/fa21/popplex-header.png";

export const pageKey = "/fall21/popplex";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <img key="h1" src={popplexHeader} style={{ width: "100%" }} />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Our project aims to facilitate communication between professors and students  in large class sizes by allowing for students to channel their confusion with the simple click of a button. On popplex, students inform the instructor that they are confused and how they want the instructor to address it (e.g. “repeat”, “rephrase”, “elaborate”, “provide an example”).  After class, students participate in a short survey that allows them to review what they learned. In turn, the lecturers receive both live and specific aggregate feedback that allows them to continually improve on their lecture.",
      <br key="b1" />,
      <br key="b2" />,
      <strong key="b3">Technologies Used</strong>,
      ": Django, HTML, and CSS",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had the following timeline:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Week 1</strong>,
      ": Ideation and functionality, user flows and basic designs, base code",
      <br key="t4" />,
      <strong key="t5">Week 2</strong>,
      ": Icons, logos and design palette",
      <br key="t6" />,
      <strong key="t7">Week 3</strong>,
      ": Hi - Fi designs, Login functionality",
      <br key="t8" />,
      <strong key="t9">Week 4</strong>,
      ": Front-end Completed, Confusion backend completed",
      <br key="t10" />,
      <strong key="t11">Week 5</strong>,
      ": Testing and implementation, Teacher/Student models revised",
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>Evaluating which tools to use for the project</li>
        <li>
          Modifying the default user class and login to accommodate for
          different student and teacher profiles
        </li>
        <li>Modifying the stylized bars that represent levels of confusion</li>
        <li>Implementing animations</li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Elaine F</strong>: It was pretty intimidating to work on a
          project from scratch, in terms of coming up with an idea, discussing
          the functionality, and then just going through and building it. Some
          tasks that seemed intimidating, like integrating frontend and backend,
          were actually fairly simple once I took a stab at them. I definitely
          learned a lot, especially in Django, and I’m so happy with how it
          turned out :) Massive shoutout to grac for all the support.
        </li>
        <li>
          <strong>Arushi S</strong>: Throughout the course of this project, I
          learned so much about developing an idea from scratch and seeing it be
          built from many different steps. I learned a lot about Django and how
          the backend of websites work and also how the frontend is connected to
          the backend. I’m so happy with how it turned out and am thankful for
          my teammates and grac :)
        </li>
        <li>
          <strong>Michelle Seiyon L</strong>: I learned that I could actually do
          design and dev, which I thought was impossible just a few weeks ago.
          It was also rewarding to find out that I could go sleepless on many
          nights without realizing it. Although I got closer with my computer
          than I should be, I am excited to learn more about the basics and
          applications of the front-end. I can’t believe that we actually
          managed to bring our idea to life. I am so proud of our team, and also
          special thanks to Grace for believing in us and for actually spending
          the hours to help us out!
        </li>
        <li>
          <strong>Paul L</strong>: It feels great to be able to put things
          together! Having completed a full spark design workshop series but
          with just a bit of CSS / HTML knowledge there was a sharp learning
          curve helping out with front-end, but it was very rewarding and I’ve
          definitely learnt a lot.
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>
          Implement the confuso-meter page to overlay on top of lecture slides
          for ease of display.
        </li>
        <li>Update the confuso-meter in real-time using event listeners.</li>
        <li>
          We need to make the website responsive to mobile screen sizes so that
          students can not only use their laptops but also their phones to
          communicate their confusion.
        </li>
        <li>
          Make it possible for students to put time stamps during class so that
          they get a report on what they need to review at the end of class.
        </li>
        <li>
          Improve the design of a post-lecture survey that will not only help
          them to identify what they learned and did not understand, but also
          inform the lecturers on how to better respond to the student’s needs.
        </li>
        <li>
          Complete backend functionality of adding different classes, class
          review page, post-lecture survey responses, and analytics.
        </li>
        <li>Expand on information and analytics provided on the teacher side.</li>
      </ul>,
    ],
  },
];

export default function PopplexPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/fa21-blue-popplex"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
