import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import igniteHeader from "../../../static/img/fa21/ignite-header.png";

export const pageKey = "/fall21/ignite";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <img key="h1" src={igniteHeader} style={{ width: "100%" }} />,
  <iframe
    key="v1"
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/sJ0YqRVvr80"
  />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "We wanted to create a website where one could go to be inspired instantly. We envision that no matter the project, whether it is an art piece, a skit, a game project, an essay, or a website idea, our randomly generated pictures, quotes, and videos will serve as inspiration for your next great masterpiece.",
      <br key="b1" />,
      <br key="b2" />,
      "We built this project entirely in React and connected to a variety of APIs: YouTube, Unsplash, and Quotable.",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had the following timeline:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Week 1</strong>,
      ": Set up react folder, index.html and base layouts",
      <br key="t4" />,
      <strong key="t5">Week 2</strong>,
      ": Search for sources of content for images, videos, and quotes. Get APIs working to get content. Complete frontend functionality",
      <br key="t6" />,
      <strong key="t7">Week 3</strong>,
      ": Connect backend content to the frontend",
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>API request limits</li>
        <li>Integrating different media pieces into the frontend</li>
        <li>
          Appropriately resizing content in React components (especially for
          photos)
        </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          <strong>Anna B</strong>: This project was a great way to get more
          familiar with React and experiment with calling different APIs. In
          hindsight, I wish that we had worked more incrementally to add each
          content type to the frontend, since our plan of working on those steps
          simultaneously meant that we had to rearrange a lot of the logic of
          the API callers to better fit the frontend.
        </li>
        <li>
          <strong>James C</strong>: I enjoyed working with others and
          experimenting with ReactJS to fully realize our project idea.
          Implementing the APIs, while a bit of a nuisance, taught me how
          everything comes together through integrating backend with frontend.
          Overall, it was a fun and interesting experience and, given the
          chance to continue with the project, I would emphasize planning ahead
          next time for how we would go about adding new features.
        </li>
        <li>
          <strong>Rain Y</strong>: Working on Ignite really helped me to tie all
          the experiences in the frontend from HTML/CSS to ReactJS together. I
          also got the chance to work on the backend with the Unsplash photo API
          and integrating it into the frontend. One biggest lesson I learned is
          that I should not constrain myself to just one spectrum in webdev, as
          both are crucial towards bringing together a featured, exciting web
          app. Going forward, I will work towards becoming a fullstack
          developer!
        </li>
        <li>
          <strong>Homer W</strong>: Coming up with this idea from the start to
          building out our frontend demo was simply one of the coolest
          experiences for me this semester. Being able to learn React while
          contributing to such a meaningful project was absolutely enriching,
          and I couldn’t have done it without all the help and support I’ve
          received from the Ignite team and the rest of Spark. One thing I’ve
          learned from this project is that, it’s never too late to start on
          something, and sometimes even the dumbest ideas could turn into things
          that are actually cool and useful (hopefully it’ll be). Plan early
          and start today!
        </li>
        <li>
          <strong>Will L</strong>: I learned a lot about React and web querying
          through working on Ignite. I didn’t know anything about web dev when I
          started this semester, and developing this project really helped me
          get a concrete understanding of how HTML, CSS, and React work together
          to create this dynamic website. It’s been fun, and going forward, my
          main goal is to plan better and dedicate more time for our future
          projects so that we can continue developing more cool and meaningful
          apps/sites!
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, we could continue to expand our project by:",
      <ul key="lf1">
        <li>Working on UI/branding more</li>
        <li>Work on graphic design, polish logo</li>
        <li>Allow for dynamic resizing and better fitting for photos</li>
        <li>Add search bar functionality</li>
        <li>Add more content variety</li>
        <li>Add shopping cart features</li>
        <li>Add users + the ability to save content to look at later</li>
        <li>Enable endless scrolling</li>
      </ul>,
    ],
  },
];

export default function IgnitePage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/fa21-blue-ignite"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
