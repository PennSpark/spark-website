import * as React from "react";
import "../style.css";

export default function BlueApp() {
  return (
    <div id="join-blue" className="join-app-container">
      <strong
        style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#577ed2" }}
      >
        SPARK BLUE
      </strong>

      <p
        style={{ fontSize: "1rem", fontWeight: "600", color: "#577ed2" }}
      >
        Our educational track - no experience required
      </p>

      <div />

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="blue-button">Blue Application &rarr;</button>
      </a>
    </div>
  )
}