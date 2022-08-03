import React from "react";
import "../styles/global.css";
import { Helmet } from "react-helmet";

import Navbar from "./navbar"
import Footer from "./Footer"

class Layout extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <Navbar />
        {this.props.children}
        <Footer />
      </>
    )
  }
}

export default Layout;
