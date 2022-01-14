import * as React from "react";
import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import FadeIn from 'react-fade-in';

const ResourcesPage = () => {
  return (
    <Layout title="Resources | Spark">
      <Navbar />
      <FadeIn>
      <div id="header-section">
        <h1>
          <span id="header-spark-text">spark</span> resources
        </h1>
      </div>
      <div className="content-section" style={{ marginBottom: "30px" }}>
        <p className="larger-text">
          A compiled list of resources to learn dev &amp; design. Our bootcamp
          curriculum is currently undergoing renovation, but we'll publish the
          link here once it's live!
        </p>
      </div>

      <div className="content-section">
        <div className="resources-section">
          <h2>Design</h2>

          <h3>Penn Classes</h3>
          <ul>
            <li><a href="">DSGN 234</a>: Art of the Web.</li>
          </ul>

            <h3>Learning Design</h3>
          <ul>
            <li>
              <a href="https://start.uxdesign.cc/">Start UX Design</a>: 9
              modules of learning design
            </li>
            <li>
              <a href="https://www.degreeless.design/">Degreeless.Design</a>:
              Compiled list of how to start UX, made by a design major who
              summarizes his design school degree experience
            </li>
            <li>
              <a href="https://lawsofux.com/">Laws of UX</a>: Collection of best
              practices that designers can consider when building user
              interfaces
            </li>
            <li>
              <a href="https://designisaparty.com/">Design is a Party</a>:
              Thoughts on learning &amp; teaching design
            </li>
            <li>
              <a href="https://bcourses.berkeley.edu/courses/1458380">
                CS160 User Interface Design and Development
              </a>
              : UC Berkeley's Introduction to HCI course
            </li>
          </ul>

          <h3>Learning Design Tools</h3>
          <ul>
            <li>
              <a href="https://bit.ly/figmadecal">Intro to Figma Decal</a>: Decal taught by UC Berkeley students to teach Figma
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=gnscqweM_NU&list=PLXDU_eVOJTx6zk5MDarIs0asNoZqlRG23&ab_channel=Figma">Figma 101</a>:
              Official Figma Youtube tutorials to explore design features
            </li>
          </ul>

          <h3>Free Design Resources</h3>
          <ul>
              <li><a href="https://www.humaaans.com/">Humaaans</a>: Mix &amp; match illustration library of human vectors</li>
              <li><a href="https://www.coolors.co/">Coolors.co</a>: Color scheme generator</li>
              <li><a href="https://paletton.com/">Paletton</a>: Generate similar colors to a current color</li>
              <li><a href="https://mobbin.design/">Mobbin</a>: Collection of modern mobile UI elements</li>
              <li><a href="https://material.io/design/">Material Design</a>: Collection of UI components and guidelines</li>
          </ul>

          <h3>Career Resources</h3>
          <ul>
            <li><a href="https://interns.design/">Interns.Design</a>: Design related internships</li>
            <li><a href="https://cofolios.com/">Cofolios</a>: Design internships at tech firms</li>
            <li><a href="https://ladder.to/">Ladder.to</a>: Forum to ask tech and design related questions</li>
          </ul>
        </div>

        <div className="resources-spacer" />

        <div className="resources-section">
          <h2>Development</h2>

          <h3>Penn Classes</h3>
          <ul>
            <li><a href="https://www.seas.upenn.edu/~cis197/">CIS 197</a>: Javascript Course. Good for learning general full-stack &amp; MERN.</li>
            <li><a href="https://cis192.github.io/schedule/">CIS 192</a>: Python Course. Lecture 8 goes over Django full-stack development.</li>
          </ul>

          <h3>Frontend Development</h3>
          <ul>
          <li><a href="https://www.w3schools.com/">w3schools</a>: Syntax guides for HTML, CSS, and JavaScript</li>
          <li><a href="https://flexboxfroggy.com/">Flexbox Froggy</a>: CSS practice exercises with cute frogs</li>
          <li><a href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a>: Official tutorial for React.js</li>
          </ul>

          <h3>Backend Development</h3>
          <ul>
            <li><a href="https://tutorial.djangogirls.org/en/">Django Girls Tutorial</a>: Tutorial on how to build a personal blog in Django</li>
          </ul>

          <h3>Career Resources</h3>
          <ul>
            <li><a href="https://ladder.to/">Ladder.to</a>: Forum to ask tech and design related questions</li>
          </ul>
        </div>
      </div>
      </FadeIn>
    </Layout>
  );
};

export default ResourcesPage;
