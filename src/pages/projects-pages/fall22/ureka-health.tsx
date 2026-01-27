import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/fall22/ureka-health";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <iframe
    key="v1"
    src="https://drive.google.com/file/d/1mxLN8rlK7gbV1g9YznoRafUpZm-W2wLB/preview"
    width="100%"
    height="500vw"
  />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Ureka Health, a social discovery platform focused on health and wellness, is on a mission to make healthy living for the everyday consumer easier. Ureka transforms the current product search experience: navigating generic articles and overwhelming product options into a more personalized, efficient, and trusted experience. The platform will focus on healthier skin first!",
    ],
  },
  {
    title: "Timeline",
    content: [
      <strong key="t1">Week 1-4</strong>,
      <br key="t2" />,
      "Understanding the client’s needs, proposing branding re-design",
      <br key="t3" />,
      <strong key="t4">Week 5-8</strong>,
      <br key="t5" />,
      "Completed wireframe, mockups, and prototype",
      <br key="t6" />,
      <strong key="t7">Week 9-12</strong>,
      <br key="t8" />,
      "Implementation of the prototype, re-iteration with client, then deployment",
      <br key="t9" />,
    ],
  },
  {
    title: "Challenges",
    content: [
      "Making and sticking to a timeline that clearly listed out all of the different components needed for the website and figuring out how to find and present a complete skincare product database.",
    ],
  },
  {
    title: "Takeaways",
    content: [
      "Communicate often with the client, make objectives clear, and break work down into smaller chunks!",
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Ureka will be implementing a marketplace to discover and buy products directly from the platform and thinking about expanding to include other wellness products.",
    ],
  },
];

export default function UrekaHealthPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://www.urekahealth.com/"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
