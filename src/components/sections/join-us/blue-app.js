import * as React from "react";
import "../style.css";

export default function BlueApp() {
  return (
    <div id="join-blue" className="join-app-container">
      <strong
        style={{ fontSize: "1.2rem", fontWeight: "600", color: "#577ed2" }}
      >
        Apply for Blue
      </strong>

      <p
        style={{ fontSize: "1rem", fontWeight: "400", color: "#577ed2" }}
      >
        Our educational track - no experience required
      </p>

      <div />

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeg7-ZFssIG2ijSAUVeR71nGrbHu8gZ8bqXU2OHrn9uNBfClg/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="blue-button">Blue Application &rarr;</button>
      </a>
    </div>
  )
}