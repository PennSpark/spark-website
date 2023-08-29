import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import WhyJoin from "../../components/sections/why-join";
import FAQ from "../../components/sections/faq";

import CoverImg from "./sp23-cover.png";

const JoinPage = () => {
  return (
    <Layout title="Join | Spark 💡">
      <Navbar />
      {/* <div className="hit-counters">
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926321&style=0007&nbdigits=5&type=ip&initCount=0" />
      </div> */}
      {/* <div
        style={{
          backgroundColor: "#EAD2DD",
          textAlign: "center",
          height: "30vh",
          minHeight: "200px",
        }}
      >
        <img
          src={CoverImg}
          style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
        />
      </div> */}
      <FadeIn>
        {/* <div id="header-section">
          <h1>
            join <span id="header-spark-text">spark</span>
          </h1>
        </div> */}
        <br />
        <br />
        <br />
        <div style={{ minHeight: "100vh" }} id="join-content-section" className="content-section">
          {/* <p className="larger-text" style={{ textAlign: "center" }}>
            Applications will open early in the fall. In the meantime, check out our <a href="/resources">student resources</a>.
          </p> */}
          <p className="larger-text" style={{ textAlign: "center" }}>
            Our Fall 2023 applications are now live and due on <strong>Thursday, September 7, 2023 at 11:59PM EST</strong>!
          </p>
          {/* <p className="larger-text" style={{ textAlign: "center", color: "#cf6c5d" }}>
            The deadline has been extended to <strong>Friday, January 20, 2023 at 11:59PM EST</strong>!
          </p> */}
          <br />
          <br />


          <div id="join-blue" className="join-app-container">
            <strong style={{ fontSize: "1.2rem", fontWeight: "600", color: "#577ed2" }}>Apply for Blue</strong>

            <div />

            <a href="https://forms.gle/PHbBsbPjdENGFNm46" target="_blank" rel="noopener noreferrer">
              <button id="blue-button">Blue Application &rarr;</button>
            </a>
          </div>

          <div className="join-app-spacer" />

          <div id="join-red" className="join-app-container">
            <strong style={{ fontSize: "1.2rem", fontWeight: "600", color: "#cf6c5d" }}>Apply for Red</strong>

            <div />

            <a href="https://forms.gle/uPoz6cqrMD1tpVuW6" target="_blank" rel="noopener noreferrer">
              <button id="red-button">Red Application &rarr;</button>
            </a>

            <a href="/static/red-developer-technical-assessment.pdf" target="_blank" rel="noopener noreferrer">
              <button id="red-button">Development Assessment &rarr;</button>
            </a>

            <a href="/static/red-design-technical-assessment.pdf" target="_blank" rel="noopener noreferrer">
              <button id="red-button">Design Assessment &rarr;</button>
            </a>

          </div>


          <div>
            <p style={{ padding: "14px 18px 14px 18px", border: "2px solid #ccc", borderRadius: "10px" }}>
              <strong style={{ fontSize: "1.2rem", fontWeight: "600" }}>General Info Session</strong>
              <div style={{ height: "4px" }} />
              Tuesday September 5th, 7-8pm EST
              <div style={{ height: "16px" }} />
              Interested in learning more about Penn Spark? We are hosting a
              General Info Meeting on <b>Tuesday September 5th, at 7:00pm EST in Skirkanich Auditorium</b> (located in the engineering complex). Join us to
              learn more about what we do and get your questions answered about our
              application process!
              <br />
              <br />
              {/* The password for the Zoom Recording is "<b>sparkupenn2022!</b>". */}
              <div style={{ height: "24px" }} />
              {/* <a href="https://fb.me/e/aq7DCZAlU" target="_blank" rel="noopener noreferrer">
              <button id="gim-btn">Facebook Event &rarr;</button>
            </a>
            <a href="https://upenn.zoom.us/rec/share/nIqDLujX_XgD7V1kFyAXC0dxAwWvlxyLLHkkfy5VPKZxSfwG2KIl2--OF0O6HJui.g8HJUEOtljjTjLj3?startTime=1662505185000" target="_blank" rel="noopener noreferrer">
              <button id="gim-btn">Zoom Recording &rarr;</button>
            </a>
            <a href="https://docs.google.com/presentation/d/1lTD7PwAniSwVodA-no6qjQauxp8Gib07v8W07Kl3uDE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button id="gim-btn">Meeting Slides &rarr;</button>
            </a> */}
            </p>
          </div>

        </div>
        {/* <AppDetails /> */}
        <WhyJoin />
        <FAQ />
      </FadeIn>
    </Layout>
  );
};

export default JoinPage;
