import * as React from "react";
import "../style.css";

export default function InterestForm() {
  return (
    <div id="interest-form" className="join-app-container">
      <strong
        style={{ fontSize: "1.2rem", fontWeight: "bold", color: "black" }}
      >
        VISIT US AT SAC FAIR
      </strong>

      <p
        style={{ fontSize: "1rem", fontWeight: "600", color: "black" }}
      >
        We'll be at SAC Fair on Wednesday, August 27th from 4pm-7pm on Locust! Join us to meet the team and learn about what we do! Sign up so you won't miss a thing.
      </p>

      <div />

      <a
        href="https://forms.gle/5FtisYh8VoQQRs5h8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="interest-button">Interest Form &rarr;</button>
      </a>
    </div>
  )
}