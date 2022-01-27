import * as React from "react";
import "../style.css"
import "./style.css"

import BonfireImg from "./img/bonfire.png"
import CounselabImg from "./img/counselab.png"
import ClarifiImg from "./img/clarifi.png"
import CommonCentsImg from "./img/commoncents.png"

import CustomLink from "../../custom-link"

import PitchDeckPdf from "./pdf/SP22-For-Clients.pdf"

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
    <br/><br/>
    <a href="https://work.pennspark.org/" rel="noopener noreferrer">
      <button>View Past Projects &rarr;</button>
    </a>

    <div style={{height: "72px"}} />

    <div>
      <h2>Work With Us</h2>
      <p className="larger-text">
        We offer a variety of engineering and design help to our clients, ranging from product branding to full-stack 
        web applications.

        Interested in potentially working together or learning more? While we currently are not looking for new Spring 2022 clients, feel 
        free to <a href="mailto:upennspark@gmail.com">shoot us an email</a> to discuss working together 
        in future cycles.
      </p>
      <br/><br/>
      <CustomLink link={PitchDeckPdf} content={[<button style={{marginRight: "24px"}}>View Pitch Deck &rarr;</button>]} /> 
      <CustomLink link="mailto:upennspark@gmail.com" content={[<button>Contact Us &rarr;</button>]} />
    </div>

    <div style={{height: "80px"}} />

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
