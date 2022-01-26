import * as React from "react";
import "../styles/global.css";
import "../styles/animations.css";
import "./style.css"

import Layout from "../components/layout";
import Navbar from "../components/navbar";

import About from "../components/sections/overview";
import CenterContainer from "../components/center-container";
import Spacer from "../components/spacer";

import FadeIn from "react-fade-in";

const IndexPage = () => {
  return (
    <Layout title="Home | Spark">
      <Navbar />
      <div className="hit-counters">
        {/* site hit counters */}
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926316&style=0007&nbdigits=6&type=page&initCount=0" />
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926317&style=0007&nbdigits=6&type=ip&initCount=0" />
      </div>
      <FadeIn>
        <div id="header-section">
          <h1>
            we are <span id="header-spark-text">spark</span>
          </h1>
        </div>
        <About />
        <CenterContainer>
          <div className="home-btns-container">
            <a href="/about">
              <button>Learn More &rarr;</button>
            </a>
            <Spacer/>
            <a href="/mail">
              <button>Join Mailing list &rarr;</button>
            </a>
          </div>
        </CenterContainer>
      </FadeIn>
    </Layout>
  );
};

export default IndexPage;
