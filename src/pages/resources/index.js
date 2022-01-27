import * as React from "react";
import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import CustomLink from "../../components/custom-link";

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
      <br/>
      <div className="content-section">
        <div className="resources-section">
          <h2>Design</h2>

          <h3>Penn Classes</h3>
          <ul>
            <li><CustomLink link="https://art20.labud.nyc/" text="DSGN 234" />: Art of the Web.</li>
          </ul>

            <h3>Learning Design</h3>
          <ul>
            <li>
              <CustomLink link="https://start.uxdesign.cc/" text="Start UX Design" />: 9
              modules of learning design
            </li>
            <li>
              <CustomLink link="https://www.degreeless.design/" text="Degreeless.Design" />:
              Compiled list of how to start UX, made by a design major who
              summarizes his design school degree experience
            </li>
            <li>
              <CustomLink link="https://lawsofux.com/" text="Laws of UX" />: Collection of best
              practices that designers can consider when building user
              interfaces
            </li>
            <li>
              <CustomLink link="https://designisaparty.com/" text="Design is a Party" />:
              Thoughts on learning &amp; teaching design
            </li>
            <li>
              <CustomLink link="https://bcourses.berkeley.edu/courses/1458380" text="CS160 User Interface Design and Development" />
              : UC Berkeley's Introduction to HCI course
            </li>
          </ul>

          <h3>Learning Design Tools</h3>
          <ul>
            <li>
              <CustomLink link="https://bit.ly/figmadecal" text="Intro to Figma Decal" />: Decal taught by UC Berkeley students to teach Figma
            </li>
            <li>
              <CustomLink link="https://www.youtube.com/watch?v=gnscqweM_NU&list=PLXDU_eVOJTx6zk5MDarIs0asNoZqlRG23&ab_channel=Figma" text="Figma 101" />:
              Official Figma Youtube tutorials to explore design features
            </li>
          </ul>

          <h3>Free Design Resources</h3>
          <ul>
              <li><CustomLink link="https://www.humaaans.com/" text="Humaaans"/>: Mix &amp; match illustration library of human vectors</li>
              <li><CustomLink link="https://www.coolors.co/" text="Coolors.co" />: Color scheme generator</li>
              <li><CustomLink link="https://paletton.com/" text="Paletton" />: Generate similar colors to a current color</li>
              <li><CustomLink link="https://mobbin.design/" text="Mobbin" />: Collection of modern mobile UI elements</li>
              <li><CustomLink link="https://material.io/design/" text="Material Design" />: Collection of UI components and guidelines</li>
          </ul>

          <h3>Career Resources</h3>
          <ul>
            <li><CustomLink link="https://interns.design/" text="Interns.Design" />: Design related internships</li>
            <li><CustomLink link="https://cofolios.com/" text="Cofolios" />: Design internships at tech firms</li>
            <li><CustomLink link="https://ladder.to/" text="Ladder.to" />: Forum to ask tech and design related questions</li>
          </ul>
        </div>

        <div className="resources-spacer" />

        <div className="resources-section">
          <h2>Development</h2>

          <h3>Penn Classes</h3>
          <ul>
            <li><CustomLink link="https://www.seas.upenn.edu/~cis197/" text="CIS 197" />: Javascript Course. Good for learning general full-stack &amp; MERN.</li>
            <li><CustomLink link="https://cis192.github.io/schedule/" text="CIS 192" />: Python Course. Lecture 8 goes over Django full-stack development.</li>
          </ul>

          <h3>Frontend Development</h3>
          <ul>
          <li><CustomLink link="https://www.w3schools.com/" text="w3schools" />: Syntax guides for HTML, CSS, and JavaScript</li>
          <li><CustomLink link="https://flexboxfroggy.com/" text="Flexbox Froggy" />: CSS practice exercises with cute frogs</li>
          <li><CustomLink link="https://reactjs.org/tutorial/tutorial.html" text="React Tutorial" />: Official tutorial for React.js</li>
          </ul>

          <h3>Backend Development</h3>
          <ul>
            <li><CustomLink link="https://tutorial.djangogirls.org/en/" text="Django Girls Tutorial" />: Tutorial on how to build a personal blog in Django</li>
          </ul>

          <h3>Career Resources</h3>
          <ul>
            <li><CustomLink link="https://ladder.to/" text="Ladder.to" />: Forum to ask tech and design related questions</li>
          </ul>
        </div>
      </div>
      </FadeIn>
    </Layout>
  );
};

export default ResourcesPage;
