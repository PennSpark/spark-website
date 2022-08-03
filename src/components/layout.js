import React from "react"
import "./global.css"
import { Helmet } from "react-helmet"

import Navbar from "./Navbar"
import Content from "./Content"
import Footer from "./Footer"

const Layout = props => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Navbar />
      {/* Content component adds margin and padding */}
      <Content>
        {props.children}
      </Content>
      <Footer />
    </>
  )
}

export default Layout