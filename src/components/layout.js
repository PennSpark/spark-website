import React from "react"
import "./global.css"

import Navbar from "./Navbar"
import Content from "./Content"
import Footer from "./Footer"

const Layout = props => {
  return (
    <div>
      <Navbar />
      <Content>
        {props.children}
      </Content>
      <Footer />
    </div>
  )
}

export default Layout