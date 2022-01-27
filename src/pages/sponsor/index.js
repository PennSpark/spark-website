import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

const WorkWithUsPage = () => {
  return (
    <Layout title="Sponsor Us | Spark 💡">
      <Navbar />
      <FadeIn>
      <div id="header-section">
        <h1>
        sponsor <span id="header-spark-text">spark</span>
        </h1>
      </div>
      <div style={{textAlign: "center"}}>
        <p className="larger-text">Coming soon!</p>
      </div>
      <br/><br/>
      </FadeIn>
    </Layout>
  );
};

export default WorkWithUsPage;
