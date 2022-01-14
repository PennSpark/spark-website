import * as React from "react";
import "../styles/global.css";
import "../styles/animations.css";

import Layout from "../components/layout";
import Navbar from "../components/navbar";

import About from "../components/sections/overview";
import Work from "../components/sections/work";
import Socials from "../components/sections/socials";

import FadeIn from 'react-fade-in';

const IndexPage = () => {
  return (
    <Layout title="Home | Spark">
      <Navbar/>
      <FadeIn>
        <div id="header-section">
          <h1>
            we are <span id="header-spark-text">spark</span>
          </h1>
        </div>
        <About />    
        <Work />
        <Socials />
      </FadeIn>
    </Layout>
  );
};

export default IndexPage;
