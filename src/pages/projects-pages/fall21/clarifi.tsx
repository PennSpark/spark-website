import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/fall21/clarifi";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <iframe
    key="v1"
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/4j6ByZJF9w4"
  />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "This semester the team worked on developing the parent portal for Clarifi. Before, the parent portal was a spreadsheet which was difficult to comprehend and was not actionable for the parents. The team used Figma to create designs and used React.js to develop the front end of the parent portal. This portal includes a dashboard with statistics on their child’s working sessions and an assignments page where parents can see the students past and current assignments.",
      <br key="b1" />,
      <br key="b2" />,
      <strong key="b3">Technologies Used</strong>,
      ": React, Redux, Figma",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had the following timeline:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Milestone 1</strong>,
      ": Conduct user interviews with parents and educators, Develop a detailed design of the parent portal based on insights from user interviews, Be familiar with the code base",
      <br key="t4" />,
      <strong key="t5">Milestone 2</strong>,
      ": Develop the tabs on the parent portal, Brainstorm designs for future features",
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>Taking over a project with an already fairly extensive codebase</li>
        <li>Learning React Redux and using it in our implementation</li>
        <li>
          Altering our implementation to specifically meet the different needs of
          the client
        </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Anna X</strong>: This was my first time leading a team with
          developers, designers, and communicating with a client. I learned a
          lot about communicating between the different members of the team and
          keeping the team organized. I also learned how to use React.js and
          React Redux.
        </li>
        <li>
          <strong>Chelsea C</strong>: I learned how to conduct user interviews
          and ask the right questions to help us better understand parent and
          educator perspectives. I also discovered that design was really a
          messy and non-linear process.
        </li>
        <li>
          <strong>Andrew J</strong>: This was my first time being on a team with
          a client and designers, so I learned a lot about the workflow of being
          on a team and how to take client feedback and actualize it into
          tangible changes. Communication in particular was really important in
          this project, and I’m leaving it with a much better understanding of
          how to communicate to be effective in a team environment.
        </li>
        <li>
          <strong>Kevin Z</strong>: Prior to doing this project, a lot of my
          coding experience was from me creating personal projects on my own. In
          this project, however, I had to learn how to both work in an existing
          codebase, as well as how to collaborate effectively with my team to
          complete our deliverables on time.
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
          For the parent portal, we would like to develop the dashboard design
          further so that there are actionable items for the parent on the
          dashboard page
        </li>
        <li>
          Further develop design of third page of the dashboard to display the
          goals that the child works towards to learn how to use Clarifi and
          work independently
        </li>
        <li>
          For the assignments page we would like the details of the assignment
          to display when the parent clicks on the name of the assignment.
        </li>
      </ul>,
    ],
  },
];

export default function ClarifiPage() {
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
