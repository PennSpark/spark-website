import React from "react";

import "../styles/global.css";
import Footer from "./Footer"

import { Helmet } from "react-helmet";

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
