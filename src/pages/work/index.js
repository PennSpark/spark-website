import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Work from "../../components/sections/work";
import PastClients from "../../components/sections/clients"

const WorkPage = () => {
  return (
    <Layout title="Work | Spark 💡">
      <Navbar />
      <FadeIn>
      <div id="header-section">
        <h1>
        <span id="header-spark-text">spark</span> work
        </h1>
      </div>
      <Work />
      <PastClients />
      </FadeIn>
    </Layout>
  );
};

export default WorkPage;
