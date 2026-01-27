import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/spring22/gaia-ai";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <iframe
    key="v1"
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/fSgz-OdhoNc"
  ></iframe>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Gaia AI is an MIT & Harvard startup using drones, LiDAR, and computer vision to collect high-quality biomass data in forests, helping landowners, project developers, and investors understand the carbon stock and timber content of their land. By measuring the carbon content of a forest with high accuracy, Gaia AI gives carbon credit buyers confidence that their credit was backed by a ton of carbon sequestered, and thus creates trust in and helps unlock the carbon credit market.",
      <br key="b1" />,
      <br key="b2" />,
      "Our team designed and implemented Gaia AI’s new website. Improving upon Gaia AI’s simple, pre-existing site, this project provides Gaia AI with a stronger platform for communicating the startup’s value proposition and information, thereby more efficiently reaching its target market. Our project consists of four pages —landing, product, about, and careers— along with a new branding system, including color, typography, and visual components. The technologies we used include Figma, Gatsby, and React.",
    ],
  },
  {
    title: "Challenges",
    content: [
      "Our biggest challenge was creating a project plan based on Gaia AI’s relatively more flexible vision. The Gaia AI team provided us with free reins to explore and experiment with different designs and implementations. This creative freedom was exciting but challenging in that we had to evaluate the feasibility of our ideas and frequently revise our plans based on feedback from the Gaia AI Team. In addition, our project required balancing tasks between the designers and developers as changes were made. Although we faced some challenges in passing tasks and visuals between designers and developers, we were able to navigate through the process and become a strong and collaborative team.",
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Chelsea C</strong>: Learned to coordinate project timeline and
          goals with clients + developers; learned website design!
        </li>
        <li>
          <strong>Yuhan L</strong>: First time PMing, working on a client
          project, and collaborating with designers! Learned a lot &amp; had fun
          :)
        </li>
        <li>
          <strong>Eric D</strong>: First time designing! Learned website design
          principles such as font sizes and layout and information structure
        </li>
        <li>
          <strong>Sumanth K</strong>: First time developing websites! Learned
          how to better develop projects working alongside other developers
          while meeting client needs!
        </li>
        <li>
          <strong>Paul L</strong>: First time doing developer role; Had to
          become familiar working with REACT in a bigger team
        </li>
        <li>
          <strong>Arush M</strong> Working on this project, from a development
          perspective, I feel like I was really able to learn from my mistakes
          and challenges last semester in Spark. I also learned aspects of the
          Agile SDLC and the relationship between design and development.
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Handing the project off to Gaia AI team (Peter, Abdullah, Monica)! Gaia AI will be continuing to develop their data analytics platform + hardware",
    ],
  },
];

export default function GaiaAiPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://www.gaia-ai.eco/"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
