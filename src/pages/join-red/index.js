import * as React from "react";
import "./style.css"
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import RedDevPdf from "./RedDev.pdf"
import RedDesignPdf from "./RedDesign.pdf"

const JoinRedPage = () => {
  return (
    <Layout title="Join Red | Spark">
    <Navbar />
    <div id="header-section">
      <h1>
        join <span id="header-red-text">red</span>
      </h1>
    </div>
    <div className="content-section">
      <p className="larger-text">
        Please submit both your written application and technical assessment by <strong>Thursday January 20th, 11:59pm EST</strong>:
        <br/><br/>
        <ul id="join-red-links">
          <li><a href="https://forms.gle/xBeEsJsM55zp3KiCA" target="_blank" rel="noopener noreferrer">Written Application</a></li>
          <li><a href={RedDevPdf} target="_blank" rel="noopener noreferrer">Dev Technical Assessment</a> (Developer Apps Only)</li>
          <li><a href={RedDesignPdf} target="_blank" rel="noopener noreferrer">Design Technical Assessment</a> (Designer Apps Only)</li>
        </ul>
        
      </p>
      
    </div>
  </Layout>
  );
};

export default JoinRedPage;
