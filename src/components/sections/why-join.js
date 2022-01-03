import * as React from "react";
import "./style.css";

export default function WhyJoin() {
  return (
    <div id="why-join-section" className="content-section">
      <h2>01. Why Join?</h2>

      <div className="why-join-container">
        <h3>Gain Experience</h3>
        <p>
          Members gain a range of technical and interpersonal experience through
          project development on teams. Blue team members learn and apply our
          tech stack of Figma, HTML/CSS, React.js, and Node.js, while Red team
          members deepen their current skillset through creating more
          technically rigorous projects. We take students from all majors and
          experience levels, and{" "}
          <span className="bold">
            highly encourage anyone with a curiosity for tech and/or design to
            apply
          </span>
          !
        </p>
      </div>

      <div className="why-join-spacer" />

      <div className="why-join-container">
        <h3>Join Our Community</h3>
        <p>
          Outside of work, our organization has a strong emphasis on community.
          This upcoming semester, we’re planning on doing our first club-wide
          retreat 👀, intra-club mixers, food runs, study sessions, BYO/karaoke,
          and general member hangouts.
        </p>
        <br />
        <a href="https://community.pennspark.org/" rel="noopener noreferrer">
          <button>our community &rarr;</button>
        </a>
      </div>

      <div className="why-join-spacer" />

      <div className="why-join-container">
        <h3>Pursue Professional Growth</h3>
        <p>
          In addition to project development, our organization encourages the
          professional growth of our members. Spark hosts a mentorship program
          between upperclassmen and underclassmen, workshops on resume writing
          and recruiting, and a referral network. Our current and previous
          members have gone on to work at a range of companies within the
          technology, financial, and government industries, including big tech,
          unicorns, and early-stage startups.
        </p>
      </div>
    </div>
  );
}
