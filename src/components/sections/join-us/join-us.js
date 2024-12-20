import * as React from "react";
import "../style.css";
import FadeIn from "react-fade-in";

import WhyJoin from "../why-join";
import FAQ from "../faq";
import CustomLink from "../../custom-link";
import RedApp from "./red-app";
import BlueApp from "./blue-app";
import InterestForm from "./interest-form";

const RECRUITING_DEADLINE = new Date("2024-09-07T17:05:00-04:00");
const SHOW_APPS_DATE = new Date("2024-08-27T00:00:00-04:00");
// const CLOSE_APPS_DATE = new Date(RECRUITING_DEADLINE.getTime() + 24 * 60 * 60 * 1000);


export default function JoinUs() {
  const currentDate = new Date();

  // const shouldDisplayInterestForm = (currentDate > SHOW_APPS_DATE) || (currentDate < RECRUITING_DEADLINE);
  // const shouldDisplayBlueApp = (currentDate > SHOW_APPS_DATE) || (currentDate < RECRUITING_DEADLINE);
  // const shouldDisplayRedApp = (currentDate > SHOW_APPS_DATE) || (currentDate < RECRUITING_DEADLINE);
  // lmfao idk who broke this
  const shouldDisplayInterestForm = false;
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
      <div
        style={{}}
        id="join-content-section"
        className="content-section"
      >
        {
          !shouldDisplayRedApp ? (
            <p className="larger-text" style={{ textAlign: "center", marginBottom: "80px" }}>
              Our next recruiting cycle will be Spring 2025. Applications open early in the semester - stay tuned!
              <br />
              {/* If you're an applicant with an <strong>approved</strong> extension, please email <a href='mailto:upennspark@gmail.com'>upennspark@gmail.com</a> to access the application form. */}
            </p>
          ) : (
            <div>
              <p className="larger-text" style={{ textAlign: "center" }}>
                Our Spring 2025 applications are now live! Applications are due on {""}
                <strong>INSERT DATE, 2025 at 11:59PM EST</strong>. 
                If you're not sure which branch to apply to, you can learn about both Blue and Red <a href='https://pennspark.org/about/'>here!</a>
              </p>
              <br></br>
              <p>
                <i>Note: If you're interested in our Blue track, please stay tuned for next semester - Blue is a yearlong program, and we only recruit in the fall!</i>
              </p>
              <br></br>
              <br></br>
            </div>
          )
        }
        {/* <p className="larger-text" style={{ textAlign: "center", color: "#cf6c5d" }}>
          The deadline has been extended to <strong>Monday, January 29, 2024 at 08:00PM EST</strong>!
        </p>
        <br />
        <br /> */}


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
          shouldDisplayInterestForm && (
            <InterestForm />
          )
        }

        {
          shouldDisplayBlueApp && ( // Only display the Red app if the current date is after the application deadline
            <BlueApp />
          )
        }

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
