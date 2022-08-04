import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Value from "../components/Value"

const DateDiv = styled.div`
  width: fit-content;
  margin: auto;
  padding: 3px;
  border: 3px solid;
  background-color: #F9DB85;

  p {
    font-weight: bold;
  }
`

const Index = () => {
  return (
    <Layout title="Home | Spark 💡">
      <h1 className="header">
        penn's premier <strong className="stroke">tech</strong>
        <br />and <strong className="stroke">design</strong> community
      </h1>
      <DateDiv>
        <p>EST. 2021</p>
      </DateDiv>
      <p className="centered"><a href="/mail" target="_blank" rel="noopener noreferrer">
        <strong>Subscribe</strong> to our newsletter for monthly updates!
      </a></p>
      <h2 className="stroke">OUR VALUES</h2>
      <Value title="1. Accessible education" link="/about" value="branches">
        <p>
          Spark is open to <strong>all experience levels, </strong>
          including both beginner and more experienced developers & designers.
          Beginners learn foundational design and development through
          our <strong>Blue Branch</strong> before diving into projects.
        </p>
        <p>
          Outside of our bootcamp curriculum,
          we host workshops and events on a variety of creative topics.
        </p>
      </Value>
      <div style={{ height: "40px" }} />
      <Value title="2. Hands-On Experience" link="/projects" value="projects">
        <p>
          Our members take ownership of their learning and gain hands-on experience
          by <strong>working with other designers and developers</strong> on a creative project each semester.
        </p>
        <p>
          In addition to working with our tech stack,
          our Red members gain experience <strong>working with real-world clients and non-profits.</strong>
        </p>
      </Value>
    </Layout>
  )
}

export default Index