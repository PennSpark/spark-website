import * as React from "react";
import "./style.css"

const STATS = [
  { value: 58, caption: "Active Members", color: "#CF6C5D" },
  { value: 42, caption: "Projects Completed", color: "#EEDC9B" },
  { value: 9, caption: "Live Semesters", color: "#4170BF" },
];

const StatItem = ({ value, caption, color }) => (
  <div className="about-stat-container">
    <p>
      <span className="about-stat" style={{ color }}>
        {value}
      </span>
      <br />
      <span className="about-caption">{caption}</span>
    </p>
  </div>
);

export default function Overview() {
  return (
    <section id="about-section" className="content-section">
      <p className="larger-text">
        We're a group of students at the University of Pennsylvania that
        bridge <span className="bold">tech</span> and{" "}
        <span className="bold">design</span> to build both creative projects and impactful
        products for clients and the community.
      </p>
      
      <div className="stats-grid">
        {STATS.map((stat, index) => (
          <React.Fragment key={stat.caption}>
            <StatItem {...stat} />
            {index < STATS.length - 1 && <div className="about-stat-spacer" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
