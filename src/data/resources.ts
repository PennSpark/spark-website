export type ResourceItem = {
  name: string;
  url: string;
  description: string;
};

export type ResourceCategory = {
  category: string;
  items: ResourceItem[];
};

export const designResources: ResourceCategory[] = [
  {
    category: "Penn Classes",
    items: [
      {
        name: "DSGN 1020",
        url: "https://www.design.upenn.edu/courses/dsgn-1020/",
        description: "Art of the Web.",
      },
      {
        name: "DSGN 2570",
        url: "https://www.design.upenn.edu/courses/dsgn-2570/",
        description: "UI/UX Design.",
      },
      {
        name: "CIS 4120",
        url: "https://cis4120.seas.upenn.edu/",
        description: "Human-Computer Interaction.",
      },
    ],
  },
  {
    category: "Learning Design",
    items: [
      {
        name: "Start UX Design",
        url: "https://start.uxdesign.cc/",
        description: "9 modules of learning design.",
      },
      {
        name: "Degreeless.Design",
        url: "https://www.degreeless.design/",
        description:
          "Compiled list of how to start UX, made by a design major who summarizes his design school degree experience.",
      },
      {
        name: "Laws of UX",
        url: "https://lawsofux.com/",
        description:
          "Collection of best practices that designers can consider when building user interfaces.",
      },
      {
        name: "Design is a Party",
        url: "https://designisaparty.com/",
        description: "Thoughts on learning & teaching design.",
      },
      {
        name: "CS160 User Interface Design and Development",
        url: "https://bcourses.berkeley.edu/courses/1458380",
        description: "UC Berkeley's introduction to HCI course.",
      },
    ],
  },
  {
    category: "Learning Design Tools",
    items: [
      {
        name: "Intro to Figma Decal",
        url: "https://bit.ly/figmadecal",
        description: "Decal taught by UC Berkeley students to teach Figma.",
      },
      {
        name: "Figma 101",
        url: "https://www.youtube.com/watch?v=gnscqweM_NU&list=PLXDU_eVOJTx6zk5MDarIs0asNoZqlRG23&ab_channel=Figma",
        description: "Official Figma YouTube tutorials to explore design features.",
      },
    ],
  },
  {
    category: "Free Design Resources",
    items: [
      {
        name: "Humaaans",
        url: "https://www.humaaans.com/",
        description: "Mix & match illustration library of human vectors.",
      },
      {
        name: "Coolors.co",
        url: "https://www.coolors.co/",
        description: "Color scheme generator.",
      },
      {
        name: "Paletton",
        url: "https://paletton.com/",
        description: "Generate similar colors to a current color.",
      },
      {
        name: "Mobbin",
        url: "https://mobbin.design/",
        description: "Collection of modern mobile UI elements.",
      },
      {
        name: "Material Design",
        url: "https://material.io/design/",
        description: "Collection of UI components and guidelines.",
      },
      {
        name: "UX Design Glossary",
        url: "https://www.qualtrics.com/blog/ux-design-glossary/",
        description:
          "A glossary of UI/UX terminology. Thank you to the Harrison Park Girl Scout Troop for recommending this resource!",
      },
    ],
  },
  {
    category: "Career Resources",
    items: [
      {
        name: "Interns.Design",
        url: "https://interns.design/",
        description: "Design related internships.",
      },
      {
        name: "Cofolios",
        url: "https://cofolios.com/",
        description: "Design internships at tech firms.",
      },
      {
        name: "Ladder.to",
        url: "https://ladder.to/",
        description: "Forum to ask tech and design related questions.",
      },
    ],
  },
];

export const devResources: ResourceCategory[] = [
  {
    category: "Penn Classes",
    items: [
      {
        name: "CIS 4120",
        url: "https://cis4120.seas.upenn.edu/",
        description: "Human-Computer Interaction.",
      },
      {
        name: "DSGN 1020",
        url: "https://www.design.upenn.edu/courses/dsgn-1020/",
        description: "Art of the Web.",
      },
      {
        name: "CIS 1920",
        url: "https://www.seas.upenn.edu/~cis1920/tliu/",
        description: "Python Programming.",
      },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      {
        name: "w3schools",
        url: "https://www.w3schools.com/",
        description: "Syntax guides for HTML, CSS, and JavaScript.",
      },
      {
        name: "Flexbox Froggy",
        url: "https://flexboxfroggy.com/",
        description: "CSS practice exercises with cute frogs.",
      },
      {
        name: "React Tutorial",
        url: "https://reactjs.org/tutorial/tutorial.html",
        description: "Official tutorial for React.js.",
      },
    ],
  },
  {
    category: "Backend Development",
    items: [
      {
        name: "Django Girls Tutorial",
        url: "https://tutorial.djangogirls.org/en/",
        description: "Tutorial on how to build a personal blog in Django.",
      },
    ],
  },
  {
    category: "Career Resources",
    items: [
      {
        name: "Ladder.to",
        url: "https://ladder.to/",
        description: "Forum to ask tech and design related questions.",
      },
    ],
  },
];
