import * as React from "react";
import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import WhyJoin from "../../components/sections/why-join";
import FAQ from "../../components/sections/faq";

import Layout from "../../components/layout";

const JoinPage = () => {
  return (
    <Layout title="Join | Spark">
      <div id="header-section">
        <h1>
          join <span id="header-spark-text">spark</span>
        </h1>
      </div>
      <div id="join-content-section" className="content-section">
        <p className="larger-text">
          We will be opening up applications for the Spring 2022 semester soon –
          please fill out our interest form to be added to our mailing list!
        </p>
        <br/><br/>
        <a
          href="https://forms.gle/4jftLcEG3r2fvMSJ9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>interest form &rarr;</button>
        </a>
      </div>

      <WhyJoin />
      <FAQ />
    </Layout>
  );
};

export default JoinPage;
