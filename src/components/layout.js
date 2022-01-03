import React from "react";

import "../styles/global.css";
import FavIcon from "../images/favicon.png"

class Layout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
          <link rel="icon" type="image/png" href={FavIcon} />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

export default Layout;
