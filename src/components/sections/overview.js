import * as React from "react";
import "./style.css"

export default function Overview() {
  return (
    <div id="about-section" className="content-section">
      <p className="larger-text">
        We’re a community of students at the University of Pennsylvania that
        bridge <span className="bold">tech</span> and{" "}
        <span className="bold">design</span> to build both creative and client
        projects from ground-up.
      </p>
      <br/><br/>
      <div className="about-stat-container">
        <p>
          <span className="about-stat" style={{ color: "#CF6C5D" }}>
            22
          </span>
          <br />
          <span className="about-caption">Active Members</span>
        </p>
      </div>

      <div className="about-stat-spacer" />

      <div className="about-stat-container">
        <p>
          <span className="about-stat" style={{ color: "#EEDC9B" }}>
            15
          </span>
          <br />
          <span className="about-caption">Completed Projects</span>
        </p>
      </div>

      <div className="about-stat-spacer" />

      <div className="about-stat-container">
        <p>
          <span className="about-stat" style={{ color: "#4170BF" }}>
            2
          </span>
          <br />
          <span className="about-caption">Live Semesters</span>
        </p>
      </div>
    </div>
  );
}
