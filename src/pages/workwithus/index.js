import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ForClients from "../../components/sections/for-clients";
import PastClients from "../../components/sections/clients";

const WorkWithUsPage = () => {
  return (
    <Layout title="Work With Us | Spark 💡">
      <Navbar />
      <FadeIn>
      <div id="header-section">
        <h1>
        work with <span id="header-spark-text">spark</span>
        </h1>
      </div>
      <ForClients />
      <div style={{height: "20px"}} />
      <PastClients />
      </FadeIn>
    </Layout>
  );
};

export default WorkWithUsPage;
