import * as React from "react";
import "../style.css";

export default function BlueApp() {
  return (
    <div id="interest-form" className="join-app-container">
      <strong
        style={{ fontSize: "1.2rem", fontWeight: "600", color: "linear-gradient(90deg, #e66465, #9198e5)" }}
      >
        General Information Meeting
      </strong>

      <p
        style={{ fontSize: "1rem", fontWeight: "400", color: "#9198e5" }}
      >
        We're hosting a GIM at Berger Auditorium at 7PM on 9/3. Join us to meet the team and learn about what we do! Sign up so you won't miss a thing.
      </p>

      <div />

      <a
        href="https://forms.gle/sDqu3nqEvtTJY3Cx9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="interest-button">Interest Form &rarr;</button>
      </a>
    </div>
  )
}