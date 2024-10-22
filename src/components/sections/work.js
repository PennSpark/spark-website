import * as React from "react";
import "./style.css"

import CustomLink from "../custom-link";

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
    <a href="https://work.pennspark.org/"><button style={{margin: "0px 24px 12px 0px"}}>View Past Projects &rarr;</button></a>
    <CustomLink link="https://github.com/pennspark" content={[<button>Our GitHub&rarr;</button>]} />
    <div style={{height: "10px"}} />

  </div>

  );
}
