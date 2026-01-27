import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import penntixHeader from "../../../static/img/fa21/penntix-header.png";

export const pageKey = "/fall21/penntix";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <img key="h1" src={penntixHeader} style={{ width: "100%" }} />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "PennTix is a web application that makes it easy to resell and buy tickets for Penn events and events/concerts in Philly. Currently, the marketplace for these transactions is decentralized, aka various GroupMe chats, which is problematic for both sellers and buyers. Our website makes it easy to buy tickets as they just select an event and see available tickets. To sell tickets, you can select/create an event and list your tickets. PennTix operates like Craigslist, by not actually conducting the transaction, just facilitating the connection between the buyer and the seller. This decreases our liability while still providing a service to the Penn community.",
      <br key="b1" />,
      <br key="b2" />,
      <strong key="b3">Technologies Used</strong>,
      ": Python, Django, React, HTML, CSS",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had the following timeline:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Week 1</strong>,
      ": Ideate features for the web app, make wireframes, create github repository, make ticket listing functionality",
      <br key="t4" />,
      <strong key="t5">Week 2</strong>,
      ": Finalize features list, set deadlines for individual tasks, create user profiles, create listings page",
      <br key="t6" />,
      <strong key="t7">Week 3</strong>,
      ": Search/sort events, design logos/animations",
      <br key="t8" />,
      <strong key="t9">Week 4</strong>,
      ": Test and polish site, final styling, incorporate visuals/animations",
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>Organizing tickets and events on website</li>
        <li>Grouping tickets for same event and displaying lowest price</li>
        <li>Creating a custom User class to have phone number field</li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Matthew D</strong>: My biggest takeaway from this project is
          the importance of planning model schema before beginning development.
          In planning the schema for the database objects, I saved a lot of
          effort later down the road as I only had to make minimal changes to
          the fields.
        </li>
        <li>
          <strong>Yuhan L</strong>: PennTix is my first full-stack development
          project! I had very limited prior experience in the technologies we
          used, from Git to React to Django, so working on PennTix definitely
          allowed me to get a sense of the biger picture in terms of how
          everything comes together.
        </li>
        <li>
          <strong>Claire Z</strong>: Some of my takeaways from this project are
          how important it is to have a framework for how the website is going
          to look in terms of which views lead to where as the project became a
          lot easier once we figured this out. This project also taught me a lot
          about the MVC framework and how each of the components are connected
          to each other. I am also happy that I finally learned how to use git
          :D
        </li>
        <li>
          <strong>Ethan Z</strong>: This was my first time using Django/HTML/CSS
          in a context that wasn’t just a personal project. My biggest takeaway
          was just learning full-stack development, as it’s knowledge that I’ve
          retained and can apply in the future.
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>Make site look prettier - add animations and logos </li>
        <li>Adding calendar on main page to make events easier to see</li>
        <li>Filter/search for events</li>
      </ul>,
    ],
  },
];

export default function PennTixPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/fa21-blue-penn-tix"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
