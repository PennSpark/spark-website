import * as React from "react";
import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import Branches from "../../components/sections/branches";
import WhyJoin from "../../components/sections/why-join";
import FAQ from "../../components/sections/faq";

import CoverImg from "./sp22-cover.png";

const JoinPage = () => {
  return (
    <Layout title="Join | Spark">
      <Navbar />
      <div id="header-section">
        <div
          style={{
            backgroundColor: "#DDE4F3",
            textAlign: "center",
            height: "380px",
            marginBottom: "20px",
          }}
        >
          <img
            src={CoverImg}
            style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
          />
        </div>
        <h1>
          join <span id="header-spark-text">spark</span>
        </h1>
      </div>
      <div id="join-content-section" className="content-section">
        <p className="larger-text">
          Our Spring 2022 applications are now live!
        </p>
        <br />
        <br />

        <a href="/join-blue">
          <button id="blue-button">apply for blue &rarr;</button>
        </a>

        <a href="/join-red">
          <button id="red-button">apply for red &rarr;</button>
        </a>
      </div>
      <Branches number="01" />
      <WhyJoin />
      <FAQ />
    </Layout>
  );
};

export default JoinPage;
