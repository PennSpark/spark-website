import * as React from "react";
import "./style.css";

import CommunityGallery from "./community-gallery";

export default function Community() {
  return (
    <div id="community-section" className="content-section">
      <h2>Community</h2>
      <p className="larger-text">
        Learn more about the community behind Spark!
      </p>
      <br />
      {/* <div style={{ textAlign: "center" }}> */}
        <a href="https://community.pennspark.org/" rel="noopener noreferrer">
          <button>spark community directory &rarr;</button>
        </a>
      {/* </div> */}
      <div style={{ height: "50px" }} />
      <CommunityGallery />
    </div>
  );
}
