import * as React from "react";
import "../styles/global.css";
import "../styles/animations.css";
import "./style.css"

import Layout from "../components/layout";
import Navbar from "../components/navbar";

import Overview from "../components/sections/overview";
import CenterContainer from "../components/center-container";
import Spacer from "../components/spacer";

import FadeIn from "react-fade-in";

const IndexPage = () => {
  return (
    <Layout title="Home | Spark 💡">
      <Navbar />
      <FadeIn>
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
            <Spacer/>
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
