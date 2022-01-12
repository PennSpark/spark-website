import * as React from "react";
import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import Branches from "../../components/sections/branches"
import WhyJoin from "../../components/sections/why-join";
import FAQ from "../../components/sections/faq";

const JoinPage = () => {
  return (
    <Layout title="Join | Spark">
      <Navbar/>
      <div id="header-section">
        <h1>
          join <span id="header-spark-text">spark</span>
        </h1>
      </div>
      {/* <div id="join-content-section" className="content-section">
        <p className="larger-text">
          Our Spring 2022 applications are now live!
        </p>
        <br/><br/>

        <a
          href="https://forms.gle/3oBuVZx3Yb7peY6N9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="blue-button">apply for blue &rarr;</button>
        </a>

        <a
          href="https://forms.gle/PnR8AqiD4vm86zEM7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="red-button">apply for red &rarr;</button>
        </a>
      </div> */}
      <Branches number="01"/>
      <WhyJoin />
      <FAQ />
    </Layout>
  );
};

export default JoinPage;
