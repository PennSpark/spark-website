import * as React from "react";
import "../style.css"
import "./style.css"

import BonfireImg from "./img/bonfire.png"
import CounselabImg from "./img/counselab.png"
import ClarifiImg from "./img/clarifi.png"
import CommonCentsImg from "./img/commoncents.png"

import CustomLink from "../../custom-link"

export default function Work() {
  return (
    <div id="work-section" className="content-section">
    <h2>Our Work</h2>
    <p className="larger-text">
      Each semester, our members come together to work on a variety of
      engineering and/or design projects. In the past, projects have ranged
      from redesigning a startup’s pilot program helping students
      with ADHD to developing a machine learning model that identifies
      pictures as emojis. We work on both client and passion projects!
    </p>
    {/* <br/>
    <p className="larger-text">
      Spark prides itself
    </p> */}
    <br/><br/>
    <a href="https://work.pennspark.org/" rel="noopener noreferrer">
      <button>view past projects &rarr;</button>
    </a>

    <div style={{height: "64px"}} />

    <h2>Our Past Clients</h2>

    <div className="work-clients">
      <div className="work-client">
        <CustomLink link="https://www.counselab.com/" content={[<img src={CounselabImg} />]}/>
      </div>

      <div className="work-client">
        <CustomLink link="https://commoncents.org/" content={[<img src={CommonCentsImg} />]}/>
      </div>

      <div className="work-client">
        <CustomLink link="https://www.tryclarifi.com" content={[<img src={ClarifiImg} />]}/>
      </div>

      <div className="work-client">
        <CustomLink link="https://www.thebonfireapp.com/" content={[<img src={BonfireImg} />]}/>
      </div>

    </div>
  </div>

  );
}
