import * as React from "react";
import "./style.css";

import CommunityGallery from "./community-gallery";
import CustomLink from "../custom-link";

export default function Community() {
  return (
    <div id="community-section" className="content-section">
      <h2>Community</h2>
      <p className="larger-text">
        Community is at the center of what we do and how we work. Beyond just collaboration inside the classroom, 
        we also strongly value the social relationships that our members share. 
        Learn more about the people behind Spark!
      </p>
      <br />
      <br />
      <CustomLink link="https://community.pennspark.org/" content={[<button>spark community directory &rarr;</button>]} />
      <div style={{ height: "60px" }} />
      <CommunityGallery />
    </div>
  );
}
