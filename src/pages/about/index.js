import * as React from "react";
import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Values from "../../components/sections/values";
import Branches from "../../components/sections/branches";

import Layout from "../../components/layout";

const AboutPage = () => {
  return (
    <Layout title="About | Spark">
      <div id="header-section">
        <h1>
          about <span id="header-spark-text">spark</span>
        </h1>
      </div>
      
      <Values />
      <Branches />
    </Layout>
  );
};

export default AboutPage;
