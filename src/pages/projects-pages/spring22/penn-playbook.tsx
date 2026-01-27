import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring22/penn-playbook";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <iframe
    key="v1"
    title="demo"
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/2Km4kdqS57k"
  ></iframe>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Spring of 2022 has been a whirlwind of classwork, conversations, and covid exposures for most of us, but as we reach the last few days of this semester we find ourselves wanting to take the time to look back and reflect on the moments that made the last couple months.",
      <br key="b1" />,
      <br key="b2" />,
      "Penn Playbook is meant to be exactly what it sounds like - part play and part book. Through this digital exhibit, we hope to present an assemblage of snapshots and stories that paint a picture of life@penn this semester while allowing you to play around and interact with our site.",
      <br key="b3" />,
      <br key="b4" />,
      <strong key="b5">Penn Wrapped</strong>,
      <br key="b6" />,
      "Inspired by Spotify Wrapped, Penn Wrapped is a compilation of survey data on the experiences of Penn students this semester.",
      <br key="b7" />,
      <strong key="b8">Penn inTouch</strong>,
      <br key="b9" />,
      "This is a space for confessions, celebrations, and everything in between.",
      <br key="b10" />,
      <strong key="b11">By the Button</strong>,
      <br key="b12" />,
      "By the Button is a quiz that tests how ~quirky~  you are in the Penn community.",
      <br key="b13" />,
      <strong key="b14">Class X</strong>,
      <br key="b15" />,
      "10 seniors, 10 interviews, and 21 days of mood and energy tracking. This one’s for the class of 2022: the seniors who have made it through four years of Penn.",
      <br key="b16" />,
      <br key="b17" />,
      "Technologies used: React.js, React Redux, MongoDB, Node.js, Express, Figma",
    ],
  },
  {
    title: "Timeline",
    content: [
      <strong key="t1">Feb 27. 2022</strong>,
      ": Initial Figma designs created",
      <br key="t2" />,
      <br key="t3" />,
      <strong key="t4">Mar 13. 2022</strong>,
      ": Physical space not secured => pivot to website only",
      <br key="t5" />,
      <br key="t6" />,
      <strong key="t7">Apr 24. 2022</strong>,
      ": Website deployed at pennplaybook.com",
      <br key="t8" />,
      <br key="t9" />,
    ],
  },
  {
    title: "Challenges",
    content: [
      "One challenge we faced was trying to reserve a physical space for an event. When asking around, all the event spaces were either too expensive or already booked. We learned that if we are to  plan a physical event, we need to look into spaces months in advance.",
      <br key="c1" />,
      <br key="c2" />,
      "Another challenge we faced was the technical challenge of creating an infinite canvas for the Penn inTouch section of the website. We decided on a solution that emulates scrolling and selectively renders text that would appear on screen to reduce load on the client.",
      <br key="c3" />,
      <br key="c4" />,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Marcel K</strong>: Try to book event spaces months in advance
          to have any chance of getting a location.
        </li>
        <li>
          <strong>Andrew J</strong>: Mobile-friendly development and horizontal
          scrolling really suck :(
        </li>
        <li>
          <strong>Ethan Z</strong>: Making screens mobile friendly
        </li>
        <li>
          <strong>Olivia Z</strong>: Thinking creatively about the possible
          directions of each installation and learning videography/video editing
        </li>
        <li>
          <strong>Anna X</strong>: I learned how to connect the frontend and
          backend of a website using React and MongoDB.
        </li>
        <li>
          <strong>Claire Z</strong>: Coming up with creative ways to visualize
          and display data on page
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "In the future, we are looking to add new pages and exhibits to the website. In addition, we are looking to secure a physical space to host an in-person event next semester.",
    ],
  },
];

export default function PennPlaybookPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp22-red-penn-playbook"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
