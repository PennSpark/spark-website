import * as React from "react";
import "./style.css";

import CommunityGallery from "./community-gallery";

export default function Community() {
  return (
    <div id="community-section" className="content-section">
      <h2>Community</h2>
      <p className="larger-text">
        Community is at the center of what we do and how we work. Learn more
        about the people behind Spark!
      </p>
      <br /><br />
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
