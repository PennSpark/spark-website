import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/fall21/bonfire";

const project = projectByKey[pageKey];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Bonfire is an iOS app where students can discover places, events, and special experiences to hangout on campus and/or in their city. With Bonfire, users get to see what everyone around them is up to and can spontaneously find something interesting to do and people to do it. While social media apps like Instagram or Facebook show you what people have been up to after the event has happened, Bonfire shows users what people are going to be up to.",
      <br key="b1" />,
      <br key="b2" />,
      <strong key="b3">Technologies Used</strong>,
      ": Figma, Illustrator",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had the following timeline:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Week 1</strong>,
      ": Social Media Templates - Moonboarding, Drafting, Send Final Deliverable",
      <br key="t4" />,
      <strong key="t5">Week 2</strong>,
      ": Branding Guidelines - Moodboarding / Research, Logo Redesign + Color Palette, Illustrations & Iconography, Send Final Deliverable",
      <br key="t6" />,
      <strong key="t7">Week 3</strong>,
      ": Mock-Up Feedback + Redesigns - Feedback on Previous Designs, Additional Mock-Ups",
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>
          Client communication: As our clients were peers/Penn students, with busy
          schedules and difficult course loads, it was difficult to coordinate
          with and meet with our client to receive feedback and client input on
          deliverables and design needs.
        </li>
        <li>
          Timeline: Because the beta test launch was postponed, we found delays
          in feedback as well as little user testing. Thus, we had to base our
          designs on our perception of the prototype.
        </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Janice K</strong>: Learning how to utilize client feedback to
          reiterate on deliverables and mockups
        </li>
        <li>
          <strong>Isabel A</strong>: Being flexible when working with clients and
          knowing when to switch gears. Learning how to fully utilize Figma.
        </li>
        <li>
          <strong>Joyce H</strong>: I learned a great deal about the process and
          details involved in making a good UI as well as how to use Figma.
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
          As Bonfire just launched its beta version publically to Penn students
          earlier this month, we anticipate a lot of user testing and feature
          design iterations in the future.
        </li>
      </ul>,
    ],
  },
];

export default function BonfirePage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://www.figma.com/proto/evYxHpC4X42ipa8Y0HUVnP/%5BInternal%5D-Bonfire?node-id=309%3A141&scaling=scale-down&page-id=308%3A15&starting-point-node-id=309%3A141&show-proto-sidebar=1"
      sourcecodeUrl=""
      sections={sections}
    />
  );
}
