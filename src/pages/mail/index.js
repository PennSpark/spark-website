import * as React from "react";

import "../../styles/global.css";
import "../../styles/animations.css";

import Navbar from "../../components/navbar";

const JoinBluePage = () => {
  return (
    <html>
      <head>
        <title>Mail | Spark 💡</title>
        <meta http-equiv="refresh" content="0; url='https://pennspark.substack.com/'" />
      </head>
      <body>
        <Navbar />
        <div id="header-section">
          <h1>subscribe</h1>
        </div>
        <div className="content-section">
          <p className="larger-text">
            If you are not automatically redirected, you can{" "}
            <a href="https://pennspark.substack.com/"
              target="_blank"
              rel="noopener noreferrer"  >
              subscribe to our mailing list here
            </a>.
          </p>
        </div>
      </body>
    </html>
  );
};

export default JoinBluePage;
