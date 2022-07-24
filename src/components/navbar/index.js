import React from "react";
import styled from "styled-components";
import "./style.css";
import "../../styles/animations.css";

import { Link } from "gatsby";
import HomeImg from "../../images/bw-logo.png";
import CenterContainer from "../center-container";

const NavLink = styled(Link)`
  float: left;
  padding: 4px 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 100px;
  color: black;
  
  :hover {
    background-color: #d9d9d9;
    color: black;
  }
`

export default function Navbar() {
  return (
    <CenterContainer>

      <div className="nav-bar">
        <div className="nav-left">
          <Link to="/">
            <img src={HomeImg} alt="home-logo" />
          </Link>
        </div>

        <div className="nav-right">
          <NavLink to="/about" activeStyle={{ backgroundColor: '#F9DB85' }}>about us</NavLink>
          <NavLink to="/community" activeStyle={{ backgroundColor: '#F9DB85' }}>our community</NavLink>
          <NavLink to="/work" activeStyle={{ backgroundColor: '#F9DB85' }}>our work</NavLink>
          <NavLink to="/workwithus" activeStyle={{ backgroundColor: '#F9DB85' }}>for clients</NavLink>
          <NavLink to="/" activeStyle={{ backgroundColor: '#F9DB85' }}>for students</NavLink>
        </div>
      </div>

    </CenterContainer>
  );
}


{/*
<a className="nav-link" href="/about">About Us</a>
<a className="nav-link" href="/work">Our Work</a>
<a className="nav-link" href="/community">Our Community</a>
<a className="nav-link" href="/workwithus">Work With Us</a>
<a className="nav-link" href="/sponsor">Sponsor Us</a>
<a className="nav-link" href="/resources">Resources</a>
<a className="nav-link" href="/join">Join Us</a>
*/}

