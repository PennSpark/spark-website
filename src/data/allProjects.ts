// projects database!

/* UPDATE INSTRUCTIONS:
1. add new project to allProjects array below
* be sure to specify each new semester in the comments
2. create a .tsx file in the src/pages/projects-pages/[semester] folder with the same pageKey as specified below
*/

export type Project = {
  pageKey: string; // for routing, internal file path, and unique identification

  title: string;
  semester: string;
  tags: string[];
  description: string;
  headerImage: string;
  team: string | null;
};

export const allProjects: Project[] = [
  // -------- Fall 2021 --------
  {
    title: "Clarifi",
    semester: "Fall 2021",
    tags: ["Coding", "Design", "Client", "Creative"],
    description:
      "Clarifi is a product to help the 4.1 million teen students with ADHD to plan and complete their work.",
    pageKey: "/fall21/clarifi",
    headerImage: "/project-images/fa21/clarifi.webp",
    team:
      "Awards: 🏆 Best Technical. Anna Xia, Andrew Jiang, Kevin Zhou, Chelsea Cheng.",
  },
  {
    title: "Counselab",
    semester: "Fall 2021",
    tags: ["Coding", "Design", "Client", "Creative"],
    description: "A marketplace for 1:1 advising sessions.",
    pageKey: "/fall21/counselab",
    headerImage: "/project-images/fa21/counselab.webp",
    team:
      "Awards: 🏆 Best Red. Marcel Kida, Alexander Zheng, Rachel Pierce.",
  },
  {
    title: "Bonfire",
    semester: "Fall 2021",
    tags: ["Design", "Client"],
    description: "Gather around. Hangout offline.",
    pageKey: "/fall21/bonfire",
    headerImage: "/project-images/fa21/bonfire.webp",
    team: "Janice Kim, Isabel An, Joyce He.",
  },
  {
    title: "Common Cents",
    semester: "Fall 2021",
    tags: ["Coding", "Design", "Client", "Creative"],
    description: "Gamified edtech platform for student personal finance.",
    pageKey: "/fall21/commoncents",
    headerImage: "/project-images/fa21/common-cents.webp",
    team:
      "Acelyn Choi, Subin Kim, Andrew Li, Arush Mehrotra, Jimmy Ren, David Zhang, Ethan Zhao, Julia Deng.",
  },
  {
    title: "Popplex",
    semester: "Fall 2021",
    tags: ["Coding", "Design", "Creative"],
    description: "Let’s pop your class perplexion!",
    pageKey: "/fall21/popplex",
    headerImage: "/project-images/fa21/popplex.webp",
    team:
      "Awards: 🏆 Best Design. Elaine Fan, Arushi Srivastava, Michelle Seiyon Lee, Paul Loh.",
  },
  {
    title: "Penn Tix",
    semester: "Fall 2021",
    tags: ["Coding", "Design", "Creative"],
    description: "Penn’s premiere ticket reselling platform.",
    pageKey: "/fall21/penntix",
    headerImage: "/project-images/fa21/penntix.webp",
    team:
      "Awards: 🏆 Best Blue, 🏆 Coolest Idea. Matthew Dong, Yuhan Liu, Claire Zhang, Ethan Zhao.",
  },
  {
    title: "Ignite",
    semester: "Fall 2021",
    tags: ["Coding", "Design", "Creative"],
    description: "Dynamic website that serves to provide creative inspiration.",
    pageKey: "/fall21/ignite",
    headerImage: "/project-images/fa21/ignite.webp",
    team:
      "Anna Baringer, James Ciardullo, Will Liang, Homer Wang, Rain Yan.",
  },

  // -------- Fall 2022 --------
  {
    title: "Respond Crisis Translation",
    semester: "Fall 2022",
    tags: ["Coding", "Client"],
    description:
      "A database re-design for a non-profit team handling more than 2500 translators through automation and ease of use.",
    pageKey: "/fall22/respond-crisis",
    headerImage: "/project-images/fa22/respond.webp",
    team:
      "Paul Loh, Sumanth Kadiyala, Marcel Kida, Joyce He, Kristine Lam.",
  },
  {
    title: "Ureka Health",
    semester: "Fall 2022",
    tags: ["Coding", "Design", "Client"],
    description: "Giving health and wellness a fresh new look.",
    pageKey: "/fall22/ureka-health",
    headerImage: "/project-images/fa22/ureka.webp",
    team:
      "Awards: 🏆 Best Red. Na Lee, Arush Mehrotra, Haley Kang, Yuni Kim, Myka Salvacion, Chelsea Cheng.",
  },

  // -------- Spring 2021 --------
  {
    title: "Poga",
    semester: "Spring 2021",
    tags: ["Coding", "Design", "Creative"],
    description: "A yoga-practicing app with a plant friend!",
    pageKey: "/spring21/poga",
    headerImage: "/project-images/sp21/poga.webp",
    team:
      "Jimmy Ren, Isabel An, Janice Kim, Wendy Wu, Charles Cheng, Brandon Adiele, Tinatin Kokoshvili, Andrew Zhang.",
  },
  {
    title: "Clarifi",
    semester: "Spring 2021",
    tags: ["Design", "Client"],
    description:
      "Designed user interface for Clarifi, an app to help students with ADHD get work done by limiting distractions, rewarding students with points and levels, and providing planning tools.",
    pageKey: "/spring21/clarifi",
    headerImage: "/project-images/sp21/clarifi.webp",
    team: "Elyssa Chou, Vivienne Chen, Kristine Lam.",
  },
  {
    title: "Habitat",
    semester: "Spring 2021",
    tags: ["Coding", "Design", "Creative"],
    description:
      "Habitat is an iOS mobile app and a Penn-themed habit tracker.",
    pageKey: "/spring21/habitat",
    headerImage: "/project-images/sp21/habitat.webp",
    team:
      "Maggie Yu, Logan Cho, Arushi Srivastava, Leon Hertzberg, Julia Deng, Xinyi Zheng.",
  },
  {
    title: "Mystery at Museum",
    semester: "Spring 2021",
    tags: ["Design", "Creative"],
    description:
      "This digital escape room is a design-only project created using Figma.",
    pageKey: "/spring21/mystery-at-museum",
    headerImage: "/project-images/sp21/mystery-museum.webp",
    team:
      "Connie Lin, Elyssa Chou, Kristine Lam, Vivienne Chen.",
  },
  {
    title: "Arthub",
    semester: "Spring 2021",
    tags: ["Coding", "Design", "Creative"],
    description:
      "A streamlined website where artists can upload their portfolios, order/complete commissions, and where recruiters can find and recruit talent.",
    pageKey: "/spring21/arthub",
    headerImage: "/project-images/sp21/arthub.webp",
    team: "Norman Chen, Maggie Yu, Elaine Fan.",
  },
  {
    title: "Mystery Music",
    semester: "Spring 2021",
    tags: ["Coding", "Design", "Creative"],
    description:
      "A four player game that tests how well you know your friends’ music tastes!",
    pageKey: "/spring21/mystery-music",
    headerImage: "/project-images/sp21/mystery-music.webp",
    team:
      "Linda Lu, David Zhang, Egret Jin, Lindsey Smith, Caroline Chin, Christy Qiu.",
  },
  {
    title: "Penntitions",
    semester: "Spring 2021",
    tags: ["Coding", "Design", "Creative"],
    description: "A petition website that allows Penn students to make an impact.",
    pageKey: "/spring21/penntitions",
    headerImage: "/project-images/sp21/penntitions.webp",
    team:
      "Janna Goliff, Ahmed Laban, Helena Zhang, Aryan Nagariya, Janice Kim.",
  },
  {
    title: "Emojifier",
    semester: "Spring 2021",
    tags: ["Coding", "Creative"],
    description:
      "Interactive website that uses machine learning to detect and classify emotions within an image.",
    pageKey: "/spring21/emojifier",
    headerImage: "/project-images/sp21/emojifier.webp",
    team:
      "Grace Jiang, Jerry Qin, Aarushi Singh, Acelyn Choi, Aditya Gupta, Shelly Wu, Subin Kim.",
  },

  // -------- Spring 2022 --------
  {
    title: "interviews.live",
    semester: "Spring 2022",
    tags: ["Coding", "Design", "Client"],
    description:
      "A smart interview prep platform to help you prepare for “that interview” and get your dream job.",
    pageKey: "/spring22/interviews-live",
    headerImage: "/project-images/sp22/interviews-live.webp",
    team:
      "Subin Kim, Acelyn Choi, Jimmy Ciardullo, Claire Zhang.",
  },
  {
    title: "Artz Philly",
    semester: "Spring 2022",
    tags: ["Coding", "Design", "Client"],
    description:
      "A mobile application to help reduce the barriers for ARTZ Philly participants to join online programming.",
    pageKey: "/spring22/artz-philly",
    headerImage: "/project-images/sp22/artz-philly.webp",
    team:
      "Anna Baringer, Eric Wang, Matthew Cho, Joyce He.",
  },
  {
    title: "Gaia AI",
    semester: "Spring 2022",
    tags: ["Coding", "Design", "Client"],
    description:
      "Website design for Gaia AI, an MIT and Harvard startup using robotics and perception AI to make trees a viable, economical carbon sequestration solution.",
    pageKey: "/spring22/gaia-ai",
    headerImage: "/project-images/sp22/gaia-ai.webp",
    team:
      "Chelsea Cheng, Yuhan Liu, Paul Loh, Arush Mehrotra, Sumanth Kadiyala, Eric Dai.",
  },
  {
    title: "Penn Playbook",
    semester: "Spring 2022",
    tags: ["Coding", "Design", "Creative"],
    description:
      "Penn Playbook is a digital exhibit with 4 main installations showcasing different aspects of Penn life through the lens of current students.",
    pageKey: "/spring22/penn-playbook",
    headerImage: "/project-images/sp22/penn-playbook.webp",
    team:
      "Marcel Kida, Andrew Jiang, Anna Xia, Ethan Zhao, Olivia Zha, Claire Zhang.",
  },
  {
    title: "Matcha Maker",
    semester: "Spring 2022",
    tags: ["Coding", "Design", "Creative"],
    description: "A website that makes coffee chatting easier and more fun!",
    pageKey: "/spring22/matchamaker",
    headerImage: "/project-images/sp22/matchamaker.webp",
    team:
      "Alyssa Nie, Rain Yan, Dhatri Medarametla, Claire Zhang.",
  },
  {
    title: "Penn Events",
    semester: "Spring 2022",
    tags: ["Coding", "Design", "Creative"],
    description: "Connecting Penn students with on-campus events.",
    pageKey: "/spring22/penn-events",
    headerImage: "/project-images/sp22/penn-events.webp",
    team:
      "Clyve Gassant, Yanjie Zhang, Myka Salvacion, Allison Zhang.",
  },

  // -------- Spring 2023 --------
  {
    title: "Procedural City",
    semester: "Spring 2023",
    tags: ["Coding", "Design", "Creative"],
    description:
      "A medieval fantasy city generated using a combination of procedural techniques, including the Wave Function Collapse algorithm and Houdini's node-based tools.",
    pageKey: "/spring23/procedural-city",
    headerImage: "/project-images/sp23/procedural-city.webp",
    team:
      "Elyssa Chou, Praneel Chakraborty, Yuhan Liu, Rain Yan, Dineth Meegoda, Thomas Shaw, Ethan Zhao, August Fu, Kashyap Chaturvedula.",
  },
  {
    title: "CATZ",
    semester: "Spring 2023",
    tags: ["Coding", "Design", "Client"],
    description:
      "Not another boring project. CATZ is a collection of interactable 3D scenes created by Spark's designers.",
    pageKey: "/spring23/catz",
    headerImage: "/project-images/sp23/cats.webp",
    team:
      "Marcel Kida, Chelsea Cheng, Joyce He, Matthew Cho, Grace Thanglerdumpsan, Janice Kim, Joyce Yoon, Ryan De Lopez, Michelle Gong.",
  },
  {
    title: "Spark in Photos",
    semester: "Spring 2023",
    tags: ["Coding", "Design", "Client"],
    description:
      "Spark-in-photos serves as an online photo album – a way of automatically collecting and showcasing all the memories within Spark (and our Slack) in one place.",
    pageKey: "/spring23/spark-in-photos",
    headerImage: "/project-images/sp23/spark-in-photos.webp",
    team:
      "Paul Loh, Christiana Guan, Jasper Zhu, Cindy Wei, Haley Kang, Dhatri Medarametla, Marcel Kida.",
  },
  {
    title: "FindMeFood",
    semester: "Spring 2023",
    tags: ["Coding", "Design", "Creative"],
    description:
      "FindMeFood is the community-based app for finding local food trucks. Add your favorite spots in University City and find new ones!",
    pageKey: "/spring23/find-me-food",
    headerImage: "/project-images/sp23/find-me-food.webp",
    team:
      "Jason Saito, James Baker, Nicole Zhao, Razaq Aribidesi, Sey Nhyira Agbotey; Mentors: Eric Wang, Chelsea Cheng.",
  },
  {
    title: "BeRater",
    semester: "Spring 2023",
    tags: ["Coding", "Design", "Creative"],
    description:
      "BeRater is a social platform for motivation – hold your friends accountable throughout the day in fun ways.",
    pageKey: "/spring23/berater",
    headerImage: "/project-images/sp23/berater.webp",
    team:
      "Zain Khan, Sanya Shetty, Sydney Simon, Yanjie Zhang, Tobias Nguyen; Mentors: Christiana Guan, Alyssa Nie, Jimmy Ren, Janice Kim.",
  },
  {
    title: "coffeechat",
    semester: "Spring 2023",
    tags: ["Coding", "Design", "Creative"],
    description:
      "An extension of Spark's internal coffee chat system: meet people with similar interests on campus.",
    pageKey: "/spring23/coffee-chat",
    headerImage: "/project-images/sp23/coffee-chat.webp",
    team:
      "Nick Cirillo, Kai Wang, Isabelle Gu, Maliha Rahman; Mentors: Joyce He, Anna Xia.",
  },
  {
    title: "studioUS",
    semester: "Spring 2023",
    tags: ["Coding", "Design", "Creative"],
    description:
      "Meet other students on campus to study for classes you have in common.",
    pageKey: "/spring23/studious",
    headerImage: "/project-images/sp23/studious.webp",
    team:
      "Andre van de Ven, Emily Kang, April Zhang, Nwai Alfa; Mentors: Sumanth Kadiyala, Janice Kim.",
  },

  // -------- Fall 2023 --------
  {
    title: "Board of Life",
    semester: "Fall 2023",
    tags: ["Coding", "Design", "Client"],
    description: "Meeting management platform equipped with AI coaching.",
    pageKey: "/fall23/boardoflife",
    headerImage: "/project-images/fa23/boardoflife.webp",
    team:
      "Tobias Nguyen, Jason Saito, April Zhang, Jasper Zhu, Anna Xia, August Fu, Johnny Jeong, Sanya Shetty, Angie Cao, Sydney Simon.",
  },
  {
    title: "Spark Makes Things",
    semester: "Fall 2023",
    tags: ["Coding", "Design", "Creative"],
    description:
      "Where our creativity meets the physical world.",
    pageKey: "/fall23/sparkmakesthings",
    headerImage: "/project-images/fa23/sparkmakesthings.webp",
    team:
      "Kashyap Chaturvedula, Emily Kang, Sey Nhyira Agbotey, Grace Thanglerdsumpan.",
  },
  {
    title: "The Spark of Life",
    semester: "Fall 2023",
    tags: ["Coding", "Design"],
    description: "An exhibit on the stages of life.",
    pageKey: "/fall23/sparkoflife",
    headerImage: "/project-images/fa23/sparkoflife.webp",
    team:
      "Andrew Chang, Marcel Kida, Ryan De Lopez, Nick Cirillo, Cindy Wei, Joyce Yoon, Joyce Chen, Grace Thanglerdsumpan, Claire Zhang, Isabelle Gu.",
  },
  {
    title: "Sparkify",
    semester: "Fall 2023",
    tags: ["Coding", "Design"],
    description: "Music moodboard generator.",
    pageKey: "/fall23/sparkify",
    headerImage: "/project-images/fa23/sparkify.webp",
    team:
      "Nwai Alfa, Jasmine Wang, Sonia Tam, Paul Loh, Matthew Cho, Luke Tong.",
  },

  // -------- Spring 2024 --------
  {
    title: "Pistachio",
    semester: "Spring 2024",
    tags: ["Coding", "Design"],
    description:
      "Pistachio is a mobile app to foster greater interaction between students by enabling anyone to post niche polls about the school and respond in a fun, competitive structure.",
    pageKey: "/spring24/pistachio",
    headerImage: "/project-images/sp24/pistachio.webp",
    team:
      "Eric Lee, August Fu, Grace Thanglerdsumpan, Angie Cao, Lori Brown, Charles Jin, Namita Sajai.",
  },
  {
    title: "SquishModel: Images to 3D",
    semester: "Spring 2024",
    tags: ["Coding", "Design", "Creative"],
    description:
      "Mobile application to turn pictures of your stuffed animals into 3D models for memory preservation and virtual play.",
    pageKey: "/spring24/squishmodel",
    headerImage: "/project-images/sp24/squishmodel.jpg",
    team:
      "James Baker, Joyce Chen, Meiling Mathur, Yue Zhao, Emily Kang, Sumanth Kadiyala, Johnny Jeong.",
  },
  {
    title: "QuickFlicks",
    semester: "Spring 2024",
    tags: ["Coding", "Design"],
    description: "The movie glimpse minigame that tests a cinephile's knowledge.",
    pageKey: "/spring24/quickflicks",
    headerImage: "/project-images/sp24/quick-flicks.webp",
    team: "Raphael Renzo Martinez, Xue Jiang, Fiona Herzog.",
  },
  {
    title: "Penn Market",
    semester: "Spring 2024",
    tags: ["Coding", "Design"],
    description:
      "An online marketplace for all your campus needs – from Penn students, for Penn students.",
    pageKey: "/spring24/pennmarket",
    headerImage: "/project-images/sp24/penn-market.webp",
    team: "Katherine Yue, David Lee, Nond Phokasub.",
  },
  {
    title: "SocialCalendar@PENN",
    semester: "Spring 2024",
    tags: ["Coding", "Design"],
    description: "A one-stop shop for Penn students to find out about social events.",
    pageKey: "/spring24/socialcalendar",
    headerImage: "/project-images/sp24/social-calendar.webp",
    team:
      "Jasmine Wang, Luke Tong, Joseph Dattilo, Megan Yang, Andre van de Ven, Ani Nguyen Le, Fiona Jiang, Michael Li, Cindy Wei.",
  },
  {
    title: "Roomies",
    semester: "Spring 2024",
    tags: ["Coding", "Design"],
    description: "Roomies is an app designed to coordinate life with roommates.",
    pageKey: "/spring24/roomies",
    headerImage: "/project-images/sp24/roomies.webp",
    team:
      "Gabriel Thiessen, Luna Chen, Raelynn Cui, Mary Liu.",
  },

  // -------- Fall 2024 --------
  {
    title: "Penn Place",
    semester: "Fall 2024",
    tags: ["Coding", "Design", "Creative"],
    description:
      "Penn Place is a collaborative 3D digital art experiment, inviting users to build art inside a shared voxel canvas in real-time.",
    pageKey: "/fall24/pennplace",
    headerImage: "/project-images/fa24/pennplace.webp",
    team:
      "Shaurya Sarma, Joyce Chen, Luka Koll, Term Taepaisitphongse, Lori Brown, Nond Phokasub, Yue Zhao.",
  },
  {
    title: "Stride",
    semester: "Fall 2024",
    tags: ["Coding", "Design", "Creative"],
    description:
      "Get rewarded for traveling sustainably around Philadelphia.",
    pageKey: "/fall24/stride",
    headerImage: "/project-images/fa24/stride.webp",
    team:
      "Meiling Mathur, Gabriel Thiessen, David Lee, Andrei Piterbarg, Emmi Wu, Fiona Herzog, Sarah Chan.",
  },
  {
    title: "Penn Pins",
    semester: "Fall 2024",
    tags: ["Coding", "Design"],
    description:
      "A social exploration app designed to help students discover campus and connect with each other in real life.",
    pageKey: "/fall24/pennpins",
    headerImage: "/project-images/fa24/pennpins.webp",
    team:
      "Estelle Kim, Michael Li, Angie Cao, Eric Lee, Katherine Yue, Mary Liu, Ruth Zhao.",
  },
];


//helpers
export const projectByKey = Object.fromEntries(
  allProjects.map((p) => [p.pageKey, p])
) as Record<string, Project>;