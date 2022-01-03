import * as React from "react";
import "./style.css"

export default function Work() {
  return (
    <div id="work-section" className="content-section">
    <h2>02. Our Work</h2>
    <p className="larger-text">
      Each semester, our members come together to work on a variety of
      engineering and/or design projects. In the past, projects have ranged
      from redesigning a startup’s pilot program targeted towards students
      with ADHD to developing a machine learning model that identifies
      pictures as emojis.
    </p>
    <br/><br/>
    <a href="https://work.pennspark.org/" rel="noopener noreferrer">
      <button>view past projects &rarr;</button>
    </a>
  </div>

  );
}
