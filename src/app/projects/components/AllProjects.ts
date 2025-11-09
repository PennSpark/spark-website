export type Project = {
  title: string;
  semester: string;
  tags: string[];
  description: string;
  url: string;
  headerImage: string;
  extra: string | null;
};

export const allProjects: Project[] = [
  {
    title: 'Project Alpha',
    semester: 'Fall 2023',
    tags: ['Web App', 'Community'],
    description: 'A web app that connects volunteers with local non-profits.',
    url: '/projects/project-alpha',
    headerImage: '/projects/project-alpha/header.jpg',
    extra: 'An in-depth platform to streamline volunteer efforts and enhance community engagement.',
  },
  {
    title: 'Beta Build',
    semester: 'Spring 2024',
    tags: ['AI', 'Social Media'],
    description: 'An AI-powered tool for automating social media posts.',
    url: '/projects/beta-build',
    headerImage: '/projects/beta-build/header.jpg',
    extra: 'Leverages machine learning to optimize posting times and content for maximum engagement.',
  },
  {
    title: 'Gamma Gadget',
    semester: 'Fall 2023',
    tags: ['Mobile App', 'Sustainability'],
    description: 'A mobile app that tracks personal carbon footprint.',
    url: '/projects/gamma-gadget',
    headerImage: '/projects/gamma-gadget/header.jpg',
    extra: 'Helps users monitor and reduce their environmental impact through daily activities.',
  },
  {
    title: 'Delta Design',
    semester: 'Spring 2024',
    tags: ['Collaboration', 'Design Tool'],
    description: 'A collaborative platform for remote design teams.',
    url: '/projects/delta-design',
    headerImage: '/projects/delta-design/header.jpg',
    extra: 'Facilitates real-time collaboration and feedback for designers working from anywhere.',
  },
  {
    title: 'Epsilon Edu',
    semester: 'Fall 2023',
    tags: ['Education', 'Interactive'],
    description: 'An interactive learning app for children with special needs.',
    url: '/projects/epsilon-edu',
    headerImage: '/projects/epsilon-edu/header.jpg',
    extra: 'Incorporates gamification and adaptive learning techniques to engage young learners.',
  },
  {
    title: 'Zeta Zen',
    semester: 'Spring 2024',
    tags: ['Wellness', 'Productivity'],
    description: 'A mindfulness and meditation app tailored for busy professionals.',
    url: '/projects/zeta-zen',
    headerImage: '/projects/zeta-zen/header.jpg',
    extra: 'Offers quick, effective meditation sessions to help users manage stress and improve focus.',
  },
  {
    title: 'Eta Eats',
    semester: 'Fall 2023',
    tags: ['Health', 'Nutrition'],
    description: 'A meal planning app that caters to dietary restrictions.',
    url: '/projects/eta-eats',
    headerImage: '/projects/eta-eats/header.jpg',
    extra: 'Provides personalized meal plans and recipes based on user preferences and health needs.',
  }
];