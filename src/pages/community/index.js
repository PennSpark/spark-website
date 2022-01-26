import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import Community from "../../components/sections/community";

const CommunityPage = () => {
  return (
    <Layout title="Community | Spark">
      <Navbar />
      <FadeIn>
      <div id="header-section">
        <h1>
        <span id="header-spark-text">spark</span> community
        </h1>
      </div>
      <Community />
      </FadeIn>
    </Layout>
  );
};

export default CommunityPage;
