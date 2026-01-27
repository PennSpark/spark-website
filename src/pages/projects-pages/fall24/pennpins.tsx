import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

export const pageKey = "/fall24/pennpins";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <a
    key="v1"
    style={{ fontSize: "24px" }}
    href="https://drive.google.com/file/d/1v5vRh4ZKjJ0Vpi3vbN-JBvZDxDC5xTf6/view?usp=sharing 

"
  >
    Demo here!
  </a>,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Imagine walking on Locust Walk right after class and you receive a notification on your phone: 'Quick!! Penn SPARK is pie-ing its two directors for charity next to the Quad!' Since you’re Nick and Andre’s friend, you really want to shove some cranberry pie in their nostrils. Seeing that the quad is only 2 minutes away from your current location, you find it convenient to walk to the quad for a quick detour. 'Penn Pins' is a social exploration app designed to help students discover campus and connect with each other in real life. As students walk around, they receive notifications for location-based “pins” dropped by other students and campus organizations—each with recommendations, events, and hidden gems nearby. With only one pin per day, users make each pin meaningful and personalized. Verified organizations can post event pins, turning the campus into a live feed of activities and spontaneous opportunities. Penn Pins is your guide to new spots, events, and connections, all within a short walk.",
    ],
  },
  {
    title: "Timeline",
    content: [
      <div key="t1">
        <p>Week 1</p>
        <ul>
          <li>Brainstorm features, finalize project requirements</li>
        </ul>
        <p>Week 2</p>
        <ul>
          <li>Developers: Learn React Native and NodeJS, discuss database</li>
          <li>
            Designers: Ideation for overall vibe and user experience, search for
            references
          </li>
          <li>Goal: Finalize theme, features, user flow, etc.</li>
        </ul>
        <p>Week 3</p>
        <ul>
          <li>
            Developers: Database models for locations and users, landing page
            with map
          </li>
          <li>
            Designers: Solidify UI with features and information architecture
          </li>
        </ul>
        <p>Week 4</p>
        <ul>
          <li>
            Developers: User authentication, landmark pages (organize info +
            social feature)
          </li>
          <li>Designers: Lo-fi mockup</li>
        </ul>
        <p>Week 5</p>
        <ul>
          <li>
            Developers: Interface for viewing single landmark, backend
            functionality
          </li>
          <li>Designers: Style guide and design system</li>
        </ul>
        <p>Week 6</p>
        <ul>
          <li>
            Developers: Re-do database, connect map with backend, build screens
          </li>
          <li>Designers: Work on hi-fi</li>
        </ul>
        <p>Week 7</p>
        <ul>
          <li>
            Developers: Finish screens, drag-drop bulletin board with backend
            integration
          </li>
          <li>Designers: Complete high-fidelity prototype</li>
        </ul>
        <p>Week 8 (Thanksgiving Break)</p>
        <ul>
          <li>Debug and work on stretch features</li>
        </ul>
        <p>Week 9</p>
        <ul>
          <li>Final checks, prepare showcase materials</li>
        </ul>
      </div>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>
          Design challenge: Product pivot: This project began as a social app
          where users could post pictures and comments only visible at specific
          locations on campus. However, after the midpoint presentation, we
          realized that the app didn’t offer compelling value to busy students.
          After a brief crisis, we puled together a brainstorming session over
          ramen and snacks, and created a detailed product document outlining
          the new product’s mission, use case, detailed descriptions of each
          page, and user flow. Setting clear goals as a team helped us
          streamline a formerly disorganized vision between designers and
          product leads, and create a straightforward product that resonates
          with users’ needs.
        </li>
        <li>
          Tech challenge: Notifications and background functions: Building an app
          where the primary entry point and main form of user interaction are
          through notifications proved an unexpected challenge; iOS had strict,
          unpredictable restrictions on notifications and background functions.
        </li>
        <li>
          Misc tech challenges: Google authentication, implementing a
          real-time/shared/infinitely expanding ‘bulletin board’ with drag-drop
          items, every dev having to learn React Native/NodeJS on the fly…
        </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          Consolidating and recording clear, detailed goals on every aspect of
          the product and making incremental edits as needed instead of only
          verbally agreeing
        </li>
        <li>
          Starting with a more lightweight, deployed v0 before implementing more
          detailed features to keep motivated and fit a shorter project timeline
        </li>
        <li>
          People are everything! The team held it together despite challenges
          and had a great time (free food at work sessions helped, too).
        </li>
      </ul>,
    ],
  },
  {
    title: "Looking Forward",
    content: [
      <p key="lf1">
        Deployed, simplified version of the app that is more of a
        utility-focused product than a fun showcase project. Stretch features:
        shareable event pins through message/applet, limited-time pin designs and
        seasonal events, more customization options for notifications.
      </p>,
    ],
  },
];

export default function PennPinsPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl="https://drive.google.com/file/d/1v5vRh4ZKjJ0Vpi3vbN-JBvZDxDC5xTf6/view?usp=sharing 

"
      sourcecodeUrl=""
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
