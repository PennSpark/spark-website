import * as React from "react";
import "./style.css";

import CustomLink from "../custom-link";

export default function SponsorUs() {
  return (
    <div id="sponsor-section" className="content-section">
      <h2>Sponsor Us</h2>
      <p className="larger-text">
        Interested in sponsoring us? Please{" "}
        <a href="mailto:upennspark@gmail.com" style={{ color: "inherit" }}>
          shoot us an email
        </a>
        ! Our sponsors receive exclusive benefits such as our resume book, logo being 
        displayed on our website and social media, direct access to top engineering and 
        design talent at Penn, and co-hosting events for Penn students.
      </p>
        <br/><br/>
      <CustomLink link="mailto:upennspark@gmail.com?subject=Spark Sponsorship Interest" content={[<button>Sponsor Us &rarr;</button>]} />

    </div>
  );
}
