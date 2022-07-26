import React from "react";
import "../styles/global.css";
import { Helmet } from "react-helmet";

import Footer from "./Footer"

class Layout extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        {this.props.children}
        <Footer />
      </>
    )
  }
}

export default Layout;
