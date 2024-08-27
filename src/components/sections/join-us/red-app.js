import * as React from "react";
import "../style.css";
import DesignTechnical from "./pdf/red-design-technical-assessment.pdf";
import DevTechnical from "./pdf/red-developer-technical-assessment.pdf";

export default function RedApp() {
  return (
    <div id="join-red" className="join-app-container">
      <strong
        style={{ fontSize: "1.2rem", fontWeight: "600", color: "#cf6c5d" }}
      >
        Apply for Red
      </strong>

      <div />

      <a
        href="https://docs.google.com/forms/d/18E1VAc0ODu7LB-HRjkmS6PFilGeu1INMdGcGWSkKHW0/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="red-button">Red Application &rarr;</button>
      </a>

      <a href={DevTechnical} target="_blank" rel="noopener noreferrer">
        <button id="red-button">Development Assessment &rarr;</button>
      </a>

      <a href={DesignTechnical} target="_blank" rel="noopener noreferrer">
        <button id="red-button">Design Assessment &rarr;</button>
      </a>
    </div>
  )
}