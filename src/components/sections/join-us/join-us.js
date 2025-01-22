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
            Our next recruiting cycle will be Fall 2025. Applications open early in the semester - stay tuned!
          </p>
        ) : (
          <div>
            <p className="larger-text" style={{ textAlign: "center" }}>
              Our Spring 2025 applications are now live! Applications are due on{" "}
              <strong>January 27th, 2025 at 5:00PM EST</strong>. 
              If you're not sure which branch to apply to, you can learn about both Blue and Red <a href='https://pennspark.org/about/'>here!</a>
            </p>
            <br />
            <p>
              <i>Note: If you're interested in our Blue track, please stay tuned for next semester - Blue is a yearlong program, and we only recruit in the fall!</i>
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
