import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { useState } from "react"

import CommunityGallery from "../components/CommunityGallery"

const Community = () => {
  const [semester, setSemester] = useState("SPRING 2022")
  return (
    <Layout title="Community | Spark 💡">
      <h1 className="header">the spark <strong className="stroke">community</strong></h1>
      <p>Community is at the <strong>center of what we do and how we work. </strong>
        Beyond just collaboration inside the classroom,
        we also strongly value the social relationships that our members share.
        Learn more about the people behind Spark!</p>
      <CommunityGallery />
      <h2>{semester}</h2>
    </Layout>
  )
}

export default Community