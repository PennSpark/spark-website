import * as React from "react";

import "../../styles/global.css";
import "./style.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import CenterContainer from "../../components/center-container";

const AboutPage = () => {
  return (
    <Layout title="Hits | Spark 💡">
      <CenterContainer>
        <div id="hits-container">
          <h3>Since Jan 14, 2022</h3>
          <div className="hits-column">
            <h2>TOTAL HITS</h2>
            <img src="https://hitwebcounter.com/counter/counter.php?page=7926316&style=0007&nbdigits=6&type=page&initCount=0" alt="hits" />
          </div>
          <div className="hits-column">
            <h2>UNIQUE VISITORS</h2>
            <img src="https://hitwebcounter.com/counter/counter.php?page=7926317&style=0007&nbdigits=6&type=ip&initCount=0" alt="hits" />
          </div>
          {/* <div className="hits-column">
            <h2>JOIN UNIQUE VISITORS</h2>
            <img src="https://hitwebcounter.com/counter/counter.php?page=7926321&style=0007&nbdigits=5&type=ip&initCount=0" alt="hits" />
          </div> */}
        </div>

        <div id="hits-container">
          <h3>Since Jan 27, 2022</h3>
          <div className="hits-column">
            <h2>TOTAL HITS</h2>
            <img src="https://hitwebcounter.com/counter/counter.php?page=7933180&style=0007&nbdigits=6&type=page&initCount=0" alt="hits" />
          </div>
          <div className="hits-column">
            <h2>UNIQUE VISITORS</h2>
            <img src="https://hitwebcounter.com/counter/counter.php?page=7933181&style=0007&nbdigits=6&type=ip&initCount=0" alt="hits" />
          </div>
        </div>
      </CenterContainer>
    </Layout>
  );
};

export default AboutPage;
