import * as React from "react";
import "./style.css";

import CommunityGallery from "./community-gallery";

export default function Community() {
  return (
    <div id="community-section" className="content-section">
      <h2>03. Community</h2>
      <p className="larger-text">Learn more about the community behind Spark!</p>
      <br />
      <a href="https://community.pennspark.org/" rel="noopener noreferrer">
        <button>view spark members &rarr;</button>
      </a>
      <div style={{height: "50px"}} />
      <CommunityGallery />
    </div>
  );
}
