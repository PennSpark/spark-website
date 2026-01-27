import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import mysteryMusicImg from "../../../static/img/sp21/mystery-music-header.png";

export const pageKey = "/spring21/mystery-music";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [<img key="d1" src={mysteryMusicImg} style={{ width: "100%" }} />];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "We built a multiplayer song guessing game using React, PubNub, Node.js, and MongoDB. The game allows each player to enter their top five songs. Then during each round, a random song is chosen and players need to guess whose song this is before the 10 seconds is up. The game features a join code that you can send to your friends and allows for many games to be played independently at the same time. A critical tool for our game was PubNub which allows real-time updates on each player’s screen when other players make a move.",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had three major milestones, detailed below:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Milestone 1</strong>,
      <ul key="t4">
        <li>
          Setting up database with MongoDB, building backend server using Node.js,
          start learning how to use PubNub for multiplayer games.
        </li>
        <li>Complete design of join/create game page</li>
      </ul>,
      <strong key="t5">Milestone 2</strong>,
      <ul key="t6">
        <li>Building frontend and main game logic using React and PubNub</li>
        <li>Complete design of main game page</li>
      </ul>,
      <strong key="t7">Final Milestone</strong>,
      <ul key="t8">
        <li>
          Complete implementation of game logic and incorporate design into
          frontend
        </li>
      </ul>,
    ],
  },
  {
    title: "Challenges",
    content: [
      <ul key="c1">
        <li>
          Our major challenge was incorporating Spotify into our game. We wanted
          to allow users to sign in with their Spotify accounts and then use the
          Spotify API to obtain songs for each of the players and play the song
          directly in our web application. However, the Spotify API was not
          returning properly formatted JSON objects, and we could not find any
          way to parse the information.
        </li>
        <li>
          - We also had some challenges at the end of our development period in
          putting all of the pieces of our project together. We had each
          developer working on one aspect of the game, one for backend, one for
          frontend, and one for Spotify, and merging everything together took
          some extra work since developers were only familiar with their own
          individual part.
        </li>
      </ul>,
    ],
  },
  {
    title: "Takeaways",
    content: [
      <ul key="ta1">
        <li>
          It was a really rewarding experience to see web development and design
          work together to create something exciting and creative. There aren’t
          many opportunities where creative minds and technical minds get to
          collaborate on a project. It was interesting to see how quickly things
          came together in the last week or so, from very fragmented pieces to a
          working game.
        </li>
        <li>
          What we learned:
          <ul>
            <li>How to build a backend server using MongoDB and Node.js</li>
            <li>Experience working with a Spotify API for the first time</li>
            <li>
              Experience working with PubNub, a popular communication API, for
              the first time
            </li>
          </ul>
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
          A stretch feature: If we find a way to parse the information from
          Spotify correctly, it should be extremely easy to incorporate that
          aspect into our game. All of the backend and frontend structure is
          designed around working with the Spotify API, so if anyone is ever
          able to figure out how to parse the data correctly, the addition of
          Spotify features should be straightforward and quick (we were really
          disappointed about leaving out this aspect of the game.
        </li>
      </ul>,
    ],
  },
];

export default function MysteryMusicPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennCreativeLabs/sp21-mystery-music"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
