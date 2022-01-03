import * as React from "react";
import "./style.css";
import "../styles/animations.css"


import About from "../components/about"
import Values from "../components/values"
import Branches from "../components/branches"
import Work from "../components/work"
import WhyJoin from "../components/why-join"
import Join from "../components/join"
import Socials from "../components/socials"


import FavIcon from "../images/favicon.ico"

const IndexPage = () => {
  return (
    <html>
      <head>
        <title>Penn Spark</title>
        <link rel="icon" href={FavIcon} />
      </head>
        <div id="header-section">
          <h1>we are <span id="header-spark-text">spark</span></h1>
        </div>

        <About />
        <Values />
        <Branches />
        <Work />
        <WhyJoin />
        <Join />
        <Socials />
        
    </html>
  );
};

export default IndexPage;
