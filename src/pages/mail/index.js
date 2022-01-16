import * as React from "react";

import "../../styles/global.css";
import "../../styles/animations.css";

import Navbar from "../../components/navbar";

const JoinBluePage = () => {
  return (
    <html>
      <head>
        <title>Mailing List | Spark</title>
        <meta http-equiv="refresh" content="0; url='https://pennspark.us5.list-manage.com/subscribe?u=93ce0114aa477284b7ee783d8&id=2121f4c4f0'" />
      </head>
      <body>
        <Navbar />
        <div id="header-section">
          <h1>subscribe</h1>
        </div>
        <div className="content-section">
          <p className="larger-text">
            If you are not automatically redirected, you can{" "}
            <a href="https://pennspark.us5.list-manage.com/subscribe?u=93ce0114aa477284b7ee783d8&id=2121f4c4f0"
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
