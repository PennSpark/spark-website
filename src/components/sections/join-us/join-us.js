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
  const shouldDisplayBlueApp = true; 
  const shouldDisplayRedApp = true;

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
            Applications open for Fall 2025! Due Aug 30 @ 5pm EST
          </p>
        ) : (
          <div>
            <p className="larger-text" style={{ textAlign: "center" }}>
              Our Fall 2025 applications are now live! Applications are due on{" "}
              <strong>August 30th, 2025 at 5:00PM EST</strong>. 
              If you're not sure which branch to apply to, you can learn about both Blue and Red <a href='https://pennspark.org/about/'>here!</a>
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
