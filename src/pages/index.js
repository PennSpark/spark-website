import * as React from "react";
import "./style.css";

import FavIcon from "../images/favicon.ico"

const IndexPage = () => {
  return (
    <html>
      <head>
        <title>Penn Spark</title>
        <link rel="icon" href={FavIcon} />
      </head>
        <div id="header-section">
          <h1>we are <span id="header-spark-text">spark</span></h1>
        </div>

        <div id="about-section">
          <h2>01. About Us</h2>
          <p>
            We’re a community of students at the University of Pennsylvania that
            bridge <span className="bold">tech</span> and <span className="bold">design</span> to
            build both creative and client projects from ground-up.
          </p>
          <div className="about-stat-container">
            <p>
              <span className="about-stat" style={{color: "#CF6C5D"}}>25</span><br/>
              <span className="about-caption">Active Members</span>
            </p>
          </div>
          <div className="about-stat-container">
            <p>
              <span className="about-stat" style={{color: "#EEDC9B"}}>15</span><br/>
              <span className="about-caption">Completed Projects</span>
            </p>
          </div>
          <div className="about-stat-container">
            <p>
              <span className="about-stat" style={{color: "#4170BF"}}>2</span><br/>
              <span className="about-caption">Live Semesters</span>
            </p>
          </div>
        </div>

        <div id="values-section">
          <h2>02. Our Values</h2>
          <div className="values-container">
            <h3>Accessible Education</h3>
            <p>
              <span className="bold">Spark is open to all experience levels</span>
              , including both beginner and more experienced developers &amp;
              designers. Beginners learn foundational design and development
              through our Blue Branch before diving into projects. Outside of our
              bootcamp curriculum, we host workshops and events on a variety of
              creative topics.
            </p>
          </div>

          <div className="values-spacer"/>

          <div className="values-container">
            <h3>Hands-On Experience</h3>
            <p>
              Our members take ownership of their learning and gain hands-on
              experience by working with other designers and developers on a
              creative project each semester. In addition to working with our tech
              stack, our Red members gain experience{" "}
              <span className="bold">
                working with real-world clients and non-profits
              </span>
              .
            </p>
          </div>

          <div className="values-spacer"/>

          <div className="values-container">
            <h3>Community</h3>
            <p>
              <span className="bold">
                Community is at the center of what we do and how we work
              </span>
              . In addition to lots of cross-team collaboration, project teams
              work closely together throughout the entire development process.
              Whether it be club-wide work sessions, retreat, and our various
              other social events, we take pride in how our organization brings
              people together!
            </p>
          </div>
        </div>

        <div id="work-section">
          <h2>03. Our Work</h2>
          <p>
            Each semester, our members come together to work on a variety of
            engineering and/or design projects. In the past, projects have ranged
            from redesigning a startup’s pilot program targeted towards students
            with ADHD to developing a machine learning model that identifies
            pictures as emojis.
          </p>
          <br/>
          <a href="https://work.pennspark.org/" rel="noopener noreferrer">
            <button>view past projects &rarr;</button>
          </a>
        </div>

        <div id="why-join-section">
          <h2>04. Why Join?</h2>

          <div className="why-join-container">
            <h3>Gain Experience</h3>
            <p>
              Members gain a range of technical and interpersonal experience
              through project development on teams. Blue team members learn and
              apply our tech stack of Figma, HTML/CSS, React.js, and Node.js,
              while Red team members deepen their current skillset through
              creating more technically rigorous projects. We take students from
              all majors and experience levels, and{" "}
              <span className="bold">
                highly encourage anyone with a curiosity for tech and/or design to
                apply
              </span>
              !
            </p>
          </div>

          <div className="why-join-spacer"/>

          <div className="why-join-container">
            <h3>Join Our Community</h3>
            <p>
              Outside of work, our organization has a strong emphasis on
              community. This upcoming semester, we’re planning on doing our first
              club-wide retreat 👀, intra-club mixers, food runs, study sessions,
              BYO/karaoke, and general member hangouts.
            </p>
          </div>

          <div className="why-join-spacer"/>

          <div className="why-join-container">
            <h3>Pursue Professional Growth</h3>
            <p>
              In addition to project development, our organization encourages the
              professional growth of our members. Spark hosts a mentorship program
              between upperclassmen and underclassmen, workshops on resume writing
              and recruiting, and a referral network. Our current and previous
              members have gone on to work at a range of companies within the
              technology, financial, and government industries, including big
              tech, unicorns, and early-stage startups.
            </p>
          </div>
        </div>

        <div id="join-section">
          <h2>05. Join Us</h2>
          <p>
            We will be opening up applications for the Spring 2022 semester soon –
            please fill out our interest form to be added to our mailing list!
          </p>
          <br/>
          <a
            href="https://forms.gle/4jftLcEG3r2fvMSJ9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>interest form &rarr;</button>
          </a>
        </div>

        <div id="socials-section">
          <h2>06. Contact Us</h2>
          <p>
            <span className="bold">Social Media</span>:{" "}
            <a href="https://facebook.com/pennspark"
              target="_blank" rel="noopener noreferrer">
              Facebook
            </a>{" | "}
            <a href="https://instagram.com/pennspark"
              target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{" | "}
            <a href="https://medium.com/@pennspark"
              target="_blank" rel="noopener noreferrer">
              Medium
            </a>
          <br/>
          <span className="bold">Work</span>:{" "}
            <a href="https://github.com/pennspark"
              target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{" | "}
            <a href="https://www.linkedin.com/company/69605156/"
              target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" | "}
            <a href="https://pennclubs.com/club/penn-spark"
              target="_blank" rel="noopener noreferrer">
              PennClubs
            </a>
            
            <br/>
            <span className="bold">Email</span>:{" "}
            <a href="mailto:upennspark@gmail.com"
              target="_blank" rel="noopener noreferrer">
              upennspark@gmail.com
            </a>
          </p>
        </div>
    </html>
  );
};

export default IndexPage;
