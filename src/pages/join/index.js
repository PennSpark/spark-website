import * as React from "react";
import "./style.css";
import "../../styles/global.css";
import "../../styles/animations.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import AppDetails from "../../components/sections/app-details";
import WhyJoin from "../../components/sections/why-join";
import FAQ from "../../components/sections/faq";

import CoverImg from "./sp22-cover.png";

const JoinPage = () => {
  return (
    <Layout title="Join | Spark">
      <Navbar />
      <div id="header-section">
        <div
          style={{
            backgroundColor: "#DDE4F3",
            textAlign: "center",
            height: "30vh",
            minHeight: "200px",
            marginBottom: "20px",
          }}
        >
          <img
            src={CoverImg}
            style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
          />
        </div>
        <h1>
          join <span id="header-spark-text">spark</span>
        </h1>
      </div>
      <div id="join-content-section" className="content-section">
        <p className="larger-text" style={{textAlign: "center"}}>
          Our Spring 2022 applications are now live and due on <strong>Thursday, January 20th at 11:59pm EST</strong>!
        </p>
        <br />
        <br />

  
        <div id="join-blue" className="join-app-container">
          <strong style={{fontSize: "1.2rem", fontWeight: "600", color: "#577ed2"}}>Apply for Blue</strong>

          <div/>

          <a href="https://forms.gle/3oBuVZx3Yb7peY6N9" target="_blank" rel="noopener noreferrer">
            <button id="blue-button">Written Application &rarr;</button>
          </a>
        </div>

        <div className="join-app-spacer" />

        <div id="join-red" className="join-app-container">
          <strong style={{fontSize: "1.2rem", fontWeight: "600", color: "#cf6c5d"}}>Apply for Red Design</strong>

          <div/>
          <a href="https://forms.gle/xBeEsJsM55zp3KiCA" target="_blank" rel="noopener noreferrer">
            <button id="red-button">Written Application &rarr;</button>
          </a>

          <a href="http://localhost:8000/static/RedDesign-495ae8e32a7dbc629b0686de3c89cf14.pdf" target="_blank" rel="noopener noreferrer">
            <button id="red-button">Technical Assessment &rarr;</button>
          </a>
        </div>

        <div className="join-app-spacer" />


        <div id="join-red" className="join-app-container">
          <strong style={{fontSize: "1.2rem", fontWeight: "600", color: "#cf6c5d"}}>Apply for Red Dev</strong>

          <div/>
         
          <a href="https://forms.gle/xBeEsJsM55zp3KiCA" target="_blank" rel="noopener noreferrer">
            <button id="red-button">Written Application &rarr;</button>
          </a>

          <a href="http://localhost:8000/static/RedDev-d3913678d968377f9f8a24ea1f3f6896.pdf" target="_blank" rel="noopener noreferrer">
            <button id="red-button">Technical Assessment &rarr;</button>
          </a>

        </div>




        <div>
          <p style={{padding: "14px 18px 14px 18px", border: "2px solid #ccc", borderRadius: "10px"}}>
            <strong style={{fontSize: "1.2rem", fontWeight: "600"}}>General Info Session</strong>
            <div style={{height: "4px"}} />
            <em>Tuesday January 18th, 8pm EST</em>
            <div style={{height: "16px"}} />
            Interested in learning more about Penn Spark? We are hosting a virtual
            General Info Meeting on Tuesday, January 18th at 8pm EST. Join us to
            learn more about what we do and get your questions answered about our
            application process! 

            <div style={{height: "24px"}} />
              <a href="https://fb.com/events/885459545372927" target="_blank" rel="noopener noreferrer">
                <button id="gim-btn">Facebook Event &rarr;</button>
                </a>

              <a href="https://upenn.zoom.us/my/gracejiang" target="_blank" rel="noopener noreferrer">
                <button id="gim-btn">Zoom Link &rarr;</button>
                </a>

          </p>
        </div>

      </div>
      {/* <AppDetails /> */}
      <WhyJoin />
      <FAQ />
    </Layout>
  );
};

export default JoinPage;
