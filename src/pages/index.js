import * as React from "react";
import "../styles/global.css";
import "../styles/animations.css";

import About from "../components/sections/about";
import Values from "../components/sections/values";
import Branches from "../components/sections/branches";
import Work from "../components/sections/work";
import WhyJoin from "../components/sections/why-join";
import Join from "../components/sections/faq";
import Socials from "../components/sections/socials";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout title="Home | Spark">
      <div id="header-section">
        <h1>
          we are <span id="header-spark-text">spark</span>
        </h1>
      </div>

      <About />
      <Values />
      <Branches />
      <Work />
      <WhyJoin />
      <Join />
      <Socials />
    </Layout>
  );
};

export default IndexPage;
