import * as React from "react";

import "../../styles/global.css";
import "./style.css"

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

const AboutPage = () => {
  return (
    <Layout title="Hits | Spark">
      <Navbar />
      <div id="hits-container">
        <br/><br/>
        <h2>SITE HITS</h2>
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926316&style=0007&nbdigits=6&type=page&initCount=0" />             

        <br/><br/>
        <h2>SITE UNIQUE VISITORS</h2>
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926317&style=0007&nbdigits=6&type=ip&initCount=0" />
      
        <br/><br/>
        <h2>JOIN UNIQUE VISITORS</h2>
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926321&style=0007&nbdigits=5&type=ip&initCount=0" />
      </div>
    </Layout>
  );
};

export default AboutPage;
