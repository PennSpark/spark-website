import React from "react";
import "./style.css";
import "../../styles/animations.css";

import HomeImg from "../../images/bw-logo.png";
import CenterContainer from "../center-container";

//  target="_blank" rel="noopener noreferrer"

export default function Navbar() {
  return (
    <CenterContainer>

      <div className="nav-bar">
        <div className="nav-left">
          <a href="/">
            <img src={HomeImg} alt="home-logo" />
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
              <a className="nav-link" href="/work">Our Work</a>
              <a className="nav-link" href="/community">Our Community</a>
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
    </CenterContainer>
  );
}
