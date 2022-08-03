import * as React from "react";
import "./style.css";

export default function AppDetails() {
  return (
    <div id="app-details" className="content-section" style={{marginTop: "0px"}}>
      {/* <h2>01. Recruiting Details</h2> */}
      <div>
        <p style={{padding: "14px 18px 14px 18px", border: "2px solid #ccc", borderRadius: "10px"}}>
          <strong style={{fontSize: "1.2rem"}}>General Info Session</strong>
          <div style={{height: "4px"}} />
          <em>Tuesday January 18th, 8pm EST</em>
          <div style={{height: "16px"}} />
          Interested in learning more about Penn Spark? We are hosting a virtual
          General Info Meeting on Tuesday, January 18th at 8pm EST. Join us to
          learn more about what we do and get your questions answered about our
          application process! 

          <div style={{height: "24px"}} />
          <div style={{textAlign: "left"}}>
          <a href="https://upenn.zoom.us/my/gracejiang"><button id="zoom-btn">Zoom Link &rarr;</button></a>
          </div>
        </p>
      </div>
    </div>
  );
}
