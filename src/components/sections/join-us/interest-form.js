import * as React from "react";
import "../style.css";

export default function InterestForm() {
  return (
    <div id="interest-form" className="join-app-container">
      <strong
        style={{ fontSize: "1.2rem", fontWeight: "bold", color: "black" }}
      >
        INTEREST FORM
      </strong>

      <p
        style={{ fontSize: "1rem", fontWeight: "600", color: "black" }}
      >
        Our General Information Meeting is on Jan 22 at 7pm in JMHH F70! Join us to meet the team and learn about what we do. Sign up for our interest form and follow us on Instagram at @pennspark so you won't miss a thing.
      </p>

      <div />

      <a
        href="https://forms.gle/F1jUPKgVgbbtSWfi6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="interest-button">Interest Form &rarr;</button>
      </a>
    </div>
  )
}
