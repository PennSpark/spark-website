import * as React from "react";
import "../style.css"
import "./style.css"

import BonfireImg from "./img/bonfire.png"
import CounselabImg from "./img/counselab.png"
import ClarifiImg from "./img/clarifi.png"
import CommonCentsImg from "./img/commoncents.png"

import CustomLink from "../../custom-link"

export default function PastClients() {
  return (
    <div id="clients-section" className="content-section">
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
