import React from "react";
import "./style.css";
import "../../styles/animations.css";

import HomeImg from "../../images/bw-logo.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <div className="nav-left">
          <a href="/">
            <img src={HomeImg} />
          </a>
        </div>
        <div className="nav-right">
          
          <div className="nav-dropdown">
            <button className="nav-dropbtn" >
              <div className="nav-link">About</div>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="nav-dropdown-content">
              <a className="nav-link" href="/about">About Us</a>
              <a className="nav-link" href="http://work.pennspark.org/" target="_blank" rel="noopener noreferrer">Our Work</a>
              <a className="nav-link" href="https://community.pennspark.org/" target="_blank" rel="noopener noreferrer">Our Community</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <button className="nav-dropbtn" >
              <div className="nav-link">For Students</div>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="nav-dropdown-content">
              <a className="nav-link" href="/resources">Resources</a>
              <a className="nav-link" href="/join">Join Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
