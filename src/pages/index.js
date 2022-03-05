import * as React from "react";
import "../styles/global.css";
import "../styles/animations.css";
import "./style.css";

import Layout from "../components/layout";
// import Navbar from "../components/navbar";

import Overview from "../components/sections/overview";
import CenterContainer from "../components/center-container";
import Spacer from "../components/spacer";

import FadeIn from "react-fade-in";

import HomeImg from "../images/bw-logo.png";

function HomeNavbar() {
  return (
      <div className="home-nav-bar">
        <div className="nav-left">
          <a href="/">
            <img src={HomeImg} alt="home-logo" style={{filter: "invert(1)"}} />
          </a>
        </div>
        <div className="nav-right">
          <div className="nav-dropdown">
            <button className="nav-dropbtn">
              <div className="nav-link" style={{color: "white"}}>About</div>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="nav-dropdown-content">
              <a className="nav-link" href="/about" style={{color: "white"}}>
                About Us
              </a>
              <a className="nav-link" href="/work" style={{color: "white"}}>
                Our Work
              </a>
              <a className="nav-link" href="/community" style={{color: "white"}}>
                Our Community
              </a>
            </div>
          </div>

          <div className="nav-dropdown">
            <button className="nav-dropbtn">
              <div className="nav-link" style={{color: "white"}}>For Clients</div>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="nav-dropdown-content">
              <a className="nav-link" href="/workwithus" style={{color: "white"}}>
                Work With Us
              </a>
              <a className="nav-link" href="/sponsor" style={{color: "white"}}>
                Sponsor Us
              </a>
            </div>
          </div>

          <div className="nav-dropdown">
            <button className="nav-dropbtn">
              <div className="nav-link" style={{color: "white"}}>For Students</div>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="nav-dropdown-content">
              <a className="nav-link" href="/resources" style={{color: "white"}}>
                Resources
              </a>
              <a className="nav-link" href="/join" style={{color: "white"}}>
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

const IndexPage = () => {
  return (
    <Layout title="Home | Spark 💡">
      <HomeNavbar />
      <FadeIn>
        <div id="home-page">
          <h1>
            we are <span id="home-header-spark-text">spark</span> ⚡
          </h1>
        </div>
        <div id="header-section">
          <h1>
            we are <span id="header-spark-text">spark</span>
          </h1>
        </div>
        <CenterContainer>
          <div className="home-btns-container">
            <a href="/about">
              <button>Learn More &rarr;</button>
            </a>
            <Spacer />
            <a href="/mail" target="_blank" rel="noopener noreferrer">
              <button>Subscribe to Our Newsletter &rarr;</button>
            </a>
          </div>
        </CenterContainer>
        <Overview />
      </FadeIn>
    </Layout>
  );
};

export default IndexPage;
