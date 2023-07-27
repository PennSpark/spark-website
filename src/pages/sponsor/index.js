import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import SponsorUs from "../../components/sections/sponsor-us/sponsor";

const SponsorPage = () => {
  return (
    <Layout title="Sponsor | Spark 💡">
      <Navbar />
      <FadeIn>
        <div id="header-section">
          <h1>
            sponsor <span id="header-spark-text">spark</span>
          </h1>
        </div>
        <SponsorUs />
      </FadeIn>
    </Layout>
  );
};

export default SponsorPage;
