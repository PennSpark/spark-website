import * as React from "react";
import "./style.css"

export default function Values() {
  return (
    <div id="values-section" className="content-section">
      <h2>01. Our Values</h2>
      <div className="values-container">
        <h3>Accessible Education</h3>
        <p>
          <span className="bold">Spark is open to all experience levels</span>,
          including both beginner and more experienced developers &amp;
          designers. Beginners learn foundational design and development through
          our Blue Branch before diving into projects. Outside of our bootcamp
          curriculum, we host workshops and events on a variety of creative
          topics.
        </p>
      </div>

      <div className="values-spacer" />

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

      <div className="values-spacer" />

      <div className="values-container">
        <h3>Community</h3>
        <p>
          <span className="bold">
            Community is at the center of what we do and how we work
          </span>
          . In addition to lots of cross-team collaboration, project teams work
          closely together throughout the entire development process. Whether it
          be club-wide work sessions, retreat, and our various other social
          events, we take pride in how our organization brings people together!
        </p>
      </div>
    </div>
  );
}
