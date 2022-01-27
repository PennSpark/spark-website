import * as React from "react";
import "../style.css";
import "./style.css";
import CustomLink from "../../custom-link";

import PitchDeckPdf from "./pdf/SP22-For-Clients.pdf";

export default function ForClients() {
  return (
    <div id="for-clients" className="content-section">
      <div>
        <h2>Work With Us</h2>
        <p className="larger-text">
          Interested in potentially working together or learning more? We offer
          a variety of engineering and design help to our clients, ranging from
          product branding to full-stack web applications. Our projects are
          generally over an 8-week period, with a 4-week trial period afterwards
          to fix any bugs and do minor adjustments.
          <br />
          <br />
          While we currently are not looking for new Spring 2022 clients, feel
          free to <a href="mailto:upennspark@gmail.com?subject=Spark x YOURCOMPANYNAME Collaboration">shoot us an email</a> to
          discuss working together in future cycles.
        </p>
        <br />
        <br />
        <CustomLink
          link={PitchDeckPdf}
          content={[
            <button style={{ marginRight: "24px" }}>
              View Pitch Deck &rarr;
            </button>,
          ]}
        />
        <CustomLink
          link="mailto:upennspark@gmail.com?subject=Spark x YOURCOMPANYNAME Collaboration"
          content={[<button>Contact Us &rarr;</button>]}
        />
      </div>
    </div>
  );
}
