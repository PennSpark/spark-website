import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import Work from "../../components/sections/work";

const WorkPage = () => {
  return (
    <Layout title="Work | Spark">
      <Navbar />
      <FadeIn>
      <div id="header-section">
        <h1>
        our work
        </h1>
      </div>
      <Work />
      </FadeIn>
    </Layout>
  );
};

export default WorkPage;
