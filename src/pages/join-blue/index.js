import * as React from "react";
import "./style.css"
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

const JoinBluePage = () => {
  return (
    <Layout title="Join Blue | Spark">
    <Navbar />
    <div id="header-section">
      <h1>
        join <span id="header-blue-text">blue</span>
      </h1>
    </div>
    <div className="content-section">
      <p className="larger-text">
        Please submit your written application by <strong>Thursday January 20th, 11:59pm EST</strong>:
        <br/><br/>
        <ul id="join-blue-links">
          <li><a href="https://forms.gle/3oBuVZx3Yb7peY6N9" target="_blank" rel="noopener noreferrer">Written Application</a></li>
        </ul>
      </p>
      
    </div>
  </Layout>
  );
};

export default JoinBluePage;
