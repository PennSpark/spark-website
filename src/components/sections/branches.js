import * as React from "react";
import "./style.css"

export default function Branches() {
  return (
    <div id="branches-section" className="content-section">
      <h2>03. Our Branches</h2>
      <br />
      <div
        className="branches-container"
        style={{ border: "#577ED2 2px solid" }}
      >
        <h3 style={{ color: "#577ED2", fontWeight: "600" }}>Spark Blue</h3>
        <p>
          <span className="bold">What we do?</span>
          <br />
          Participate in a 6 week bootcamp in either the design or development
          track, followed by a creative team project.
          <br />
          <br />
          <span className="bold">Who can join?</span>
          <br />
          Anyone, but targeted towards beginners without previous coding and/or
          design experience.
        </p>
      </div>

      <div className="branches-spacer" />

      <div
        className="branches-container"
        style={{ border: "#CF6C5D 2px solid" }}
      >
        <h3 style={{ color: "#CF6C5D", fontWeight: "600" }}>Spark Red</h3>
        <p>
          <span className="bold">What we do?</span>
          <br />
          Work in teams to build more advanced projects, either through working
          with real-world clients and nonprofits or on creatively brainstormed
          ideas.
          <br />
          <br />
          <span className="bold">Who can join?</span>
          <br />
          Returning members or new members with proficient technical experience.{" "}
          <em>
            (Developers: CIS 120 or equivalent, knowledge of full-stack
            development.)
          </em>
        </p>
      </div>
    </div>
  );
}
