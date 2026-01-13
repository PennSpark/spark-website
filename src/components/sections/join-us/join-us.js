import * as React from "react";
import "../style.css";
import FadeIn from "react-fade-in";

import WhyJoin from "../why-join";
import FAQ from "../faq";
import RedApp from "./red-app";
import BlueApp from "./blue-app";
import InterestForm from "./interest-form";

export default function JoinUs() {
  const shouldDisplayInterestForm = true;
  const shouldDisplayBlueApp = false; 
  const shouldDisplayRedApp = false;

  return (
    <FadeIn>
      <div id="header-section">
        <h1>
          join <span id="header-spark-text">spark</span>
        </h1>
      </div>
      <br />
      <br />
      <br />
      <div id="join-content-section" className="content-section">
        {!shouldDisplayRedApp ? (
          <p className="larger-text" style={{ textAlign: "center", marginBottom: "80px" }}>
            Applications opening soon for Spring 2026! Due Jan 24 @ 5pm EST
          </p>
        ) : (
          <div>
            <p className="larger-text" style={{ textAlign: "center" }}>
              Our Spring 2026 applications are now live! Applications are due on{" "}
              <strong>January 24th, 2026 at 5:00PM EST</strong>. 
            </p>
            <br />
            <br />
          </div>
        )}

        {/* <p className="larger-text" style={{ textAlign: "center", color: "#cf6c5d" }}>
          The deadline has been extended to <strong>Tuesday, January 28, 2025 at 05:00PM EST!</strong>
        </p>
        <br />
        <br /> */}

        {shouldDisplayInterestForm && <InterestForm />}

        {shouldDisplayBlueApp && <BlueApp />}

        {shouldDisplayRedApp && <RedApp />}

      </div>
      <WhyJoin />
      <FAQ />
    </FadeIn>
  );
}
