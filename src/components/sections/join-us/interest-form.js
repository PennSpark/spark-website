import * as React from "react";
import "../style.css";

export default function InterestForm() {
  return (
    <div id="interest-form" className="join-app-container">
      <strong
        style={{ fontSize: "1.2rem", fontWeight: "bold", color: "black" }}
      >
        GENERAL INFORMATION MEETING
      </strong>

      <p
        style={{ fontSize: "1rem", fontWeight: "600", color: "black" }}
      >
        We're hosting a GIM at PLACE at TIME on DATE. Join us to meet the team and learn about what we do! Sign up so you won't miss a thing.
      </p>

      <div />

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="interest-button">Interest Form &rarr;</button>
      </a>
    </div>
  )
}