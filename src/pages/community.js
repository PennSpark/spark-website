import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CommunityGallery from "../components/CommunityGallery"
import Directory from "../components/Directory"


const Community = () => {
  return (
    <Layout title="Community | Spark 💡">
      <h1 className="header">the spark <strong className="stroke">community</strong></h1>
      <p>
        Community is at the <strong>center of what we do and how we work. </strong>
        Beyond just collaboration inside the classroom,
        we also strongly value the social relationships that our members share.
        Learn more about the people behind Spark!
      </p>
      <div style={{ height: "var(--spacer-height)" }} />
      <CommunityGallery />
      <p>Meet our teams below, and head over to <Link to="/work">our work</Link> page to check out our projects!</p>
      <div style={{ height: "var(--spacer-height)" }} />
      <Directory />
    </Layout>
  )
}

export default Community