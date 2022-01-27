import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import Values from "../../components/sections/values";
import Branches from "../../components/sections/branches";

const AboutPage = () => {
  return (
    <Layout title="About | Spark 💡">
      <Navbar />
      <FadeIn>
      <div id="header-section">
        <h1>
          about <span id="header-spark-text">spark</span>
        </h1>
      </div>
      <div className="content-section">
        <p className="larger-text">
          Established in Spring 2021, Spark is a community of student developers
          and designers at the University of Pennsylvania that builds both
          creative and client projects.
        </p>
      </div>
      <Values />
      <Branches />
      </FadeIn>
    </Layout>
  );
};

export default AboutPage;
