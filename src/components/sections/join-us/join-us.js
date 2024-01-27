import * as React from "react";
import "../style.css";
import FadeIn from "react-fade-in";

import WhyJoin from "../why-join";
import FAQ from "../faq";



import CustomLink from "../../custom-link";
import RedApp from "./red-app";

export default function JoinUs() {
  const currentDate = new Date();
  const applicationDeadline = new Date("2024-01-21T23:59:00-05:00"); // Set the application deadline date and time

  const shouldDisplayRedApp = currentDate > applicationDeadline;
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
      <div
        style={{ minHeight: "60vh" }}
        id="join-content-section"
        className="content-section"
      >
        {
          !shouldDisplayRedApp ? (
            <p className="larger-text" style={{ textAlign: "center" }}>
              Applications for Spring 2024 coming very soon - stay tuned!
              <br />
              Keep scrolling to read more about our application process.
            </p>
          ) : (
            <p className="larger-text" style={{ textAlign: "center" }}>
              Our Spring 2024 applications are now live and red apps are due on {""}
              <strong><s>Sunday, January 28, 2024 at 11:59PM EST</s></strong>. <i>Note: We will ONLY be accepting
                red apps in the Spring due to the blue being a year-long curriculum.</i>
            </p>
          )
        }

        <p className="larger-text" style={{ textAlign: "center", color: "#cf6c5d" }}>
          The deadline has been extended to <strong>Monday, January 29, 2024 at 08:00PM EST</strong>!
        </p>
        <br />
        <br />

        {/* <div id="join-blue" className="join-app-container">
          <strong
            style={{ fontSize: "1.2rem", fontWeight: "600", color: "#577ed2" }}
          >
            Apply for Blue
          </strong>

          <div />

          <a
            href="https://forms.gle/PHbBsbPjdENGFNm46"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="blue-button">Blue Application &rarr;</button>
          </a>
        </div> */}

        {
          shouldDisplayRedApp && ( // Only display the Red app if the current date is after the application deadline
            <RedApp />
          )
        }

        {/* <RedApp /> */}

        {/* <div className="join-app-spacer" /> */}



        {/* <div>
          <p
            style={{
              padding: "14px 18px 14px 18px",
              border: "2px solid #ccc",
              borderRadius: "10px",
            }}
          >
            <strong style={{ fontSize: "1.2rem", fontWeight: "600" }}>
              General Info Session
            </strong>
            <div style={{ height: "4px" }} />
            Tuesday September 5th, 7-8pm EST
            <div style={{ height: "16px" }} />
            Interested in learning more about Penn Spark? We are hosting a
            General Info Meeting on{" "}
            <b>
              Tuesday September 5th, at 7:00pm EST in Berger Auditorium
            </b>{" "}
            (located in Skirkanich Hall at the engineering quad). Join us to
            learn more about what we do and get your questions answered about
            our application process!
            <br />
            <br />
            <div style={{ height: "24px" }} />
          </p>
        </div> */}
      </div>
      {/* <AppDetails /> */}
      <WhyJoin />
      <FAQ />
    </FadeIn>
  );
}
