import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import matchamakerHeader from "../../../static/img/sp22/matchamaker-header.png";

export const pageKey = "/spring22/matchamaker";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [<img key="d1" src={matchamakerHeader} style={{ width: "100%" }} />];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Spark is one of the many clubs that requires coffee chats between its members. As a new member, it can be intimidating to see who you want to coffee chat, and as a returning member, you can get caught up in just coffee chatting your friends. We decided to make an easy way to match people with each other to make coffee chatting more involved and fun! Matchmaker features a survey with unique questions that each user can take and an algorithm that takes their answers to create weekly user matches. Each user can also customize their profile and upload their coffee chat photos to a gallery afterwards:)",
      <br key="b1" />,
      <br key="b2" />,
      <strong key="b3">Technologies Used</strong>,
      ": React, Express, MongoDB, Figma",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had the following timeline:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Week 1</strong>,
      <br key="t4" />,
      <ul key="t5">
        <li>
          Brainstormed + finalized project idea - wanted to focus on coffee chat
          pairings, going off of the Google Form that Spark normally uses to
          match members. Wanted to have a website that could be used by members
          in the future.
        </li>
        <li>Created repo in Spark Github</li>
        <li>Created Figma file and wireframes</li>
        <li>
          Set weekly project meeting time on Sundays before general meetings
        </li>
      </ul>,
      <br key="t6" />,
      <strong key="t7">Week 2</strong>,
      <br key="t8" />,
      <ul key="t9">
        <li>Created first animations and drawings to put on website</li>
        <li>Finalized general theme of website</li>
        <li>Began creating frontend with React based on wireframes</li>
        <li>
          Began developing backend for authentication, user login, and signup
        </li>
      </ul>,
      <br key="t10" />,
      <strong key="t11">Week 3</strong>,
      <ul key="t12">
        <li>Added more animations to website</li>
        <li>Designed user profile page</li>
        <li>Created home page, gallery, and survey questions</li>
        <li>Found Edmund’s Blossom algorithm and integrated into website</li>
        <li>
          Fleshed out backend for user, setting user profile, and matching with
          algorithm
        </li>
        <li>Integrated frontend and backend</li>
      </ul>,
      <br key="t13" />,
      <strong key="t14">Week 4</strong>,
      <ul key="t15">
        <li>Designed admin pages for matching</li>
        <li>Created user profile display and admin pages on frontend</li>
        <li>Cleaned up frontend design</li>
        <li>Worked on admin backend</li>
      </ul>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>:-)</li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Claire Z</strong>: Creating custom graphics/animations and
          integrating them into website
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
          We want to have email/text/Slack integration so that users can get a
          notification about who they’ve been matched with. Also, being able to
          have multiple customizable surveys with different kinds of questions
          (non multiple choice).
        </li>
      </ul>,
    ],
  },
];

export default function MatchaMakerPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp22-blue-matchamaker"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
