import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

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
      <h1 className="header">penn's premier <strong className="stroke">tech</strong>
        <br />and <strong className="stroke">design</strong> community</h1>
      <DateDiv>
        <p>EST. 2021</p>
      </DateDiv>
      <p className="centered"><a href="/mail" target="_blank" rel="noopener noreferrer">
        <strong>Subscribe</strong> to our newsletter for monthly updates!
      </a></p>
      <h2 className="stroke">OUR VALUES</h2>
    </Layout>
  )
}

export default Index