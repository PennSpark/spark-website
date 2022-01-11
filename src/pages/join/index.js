import * as React from "react";
import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

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
      <div id="join-content-section" className="content-section">
        <p className="larger-text">
          We will be opening up applications for the Spring 2022 semester soon –
          please sign up for our mailing list below!
        </p>
        <br/><br/>
        <a
          href="https://pennspark.us5.list-manage.com/subscribe?u=93ce0114aa477284b7ee783d8&id=2121f4c4f0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>sign up for our mailing list &rarr;</button>
        </a>
      </div>

      <WhyJoin />
      <FAQ />
    </Layout>
  );
};

export default JoinPage;
