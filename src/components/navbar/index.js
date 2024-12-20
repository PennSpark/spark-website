import React from "react";
import "./style.css";
import "../../styles/animations.css";

import HomeImg from "../../images/bw-logo.png";
import CenterContainer from "../center-container";

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
              <div className="nav-link">For Clients</div>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="nav-dropdown-content">
              <a className="nav-link" href="/workwithus">Work With Us</a>
              <a className="nav-link" href="/sponsor">Sponsor Us</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <button className="nav-dropbtn" >
              <div className="nav-link">Join Us</div>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="nav-dropdown-content">
              <a className="nav-link" href="/join">Applications</a>
              <a className="nav-link" href="/resources">Resources</a>
            </div>
          </div>
        </div>
      </div>
    </CenterContainer>
  );
}
