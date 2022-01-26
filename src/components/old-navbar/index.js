import React from "react";
import "./style.css";
import "../../styles/animations.css";

import HomeImg from "../../images/bw-logo.png";

export default function Navbar() {
  return (
    <div className="navbar-custom-container">
      <ul className="navbar-custom">
        <li className="navbar-custom-left-link">
          <a href="/">
            <img id="navbar-custom-img" src={HomeImg} />
          </a>
        </li>

        <li className="navbar-custom-right-link">
          <a href="/join">Join</a>
        </li>

        <li className="navbar-custom-right-link">
          <a href="/resources">Resources</a>
        </li>

        <li className="navbar-custom-right-link">
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
}
