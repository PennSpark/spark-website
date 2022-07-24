import * as React from "react";
import "../styles/global.css";
import "../styles/animations.css";
import "./style.css"

import { Link } from "gatsby"
import Layout from "../components/layout";
import Navbar from "../components/navbar";

import Overview from "../components/sections/overview";
import CenterContainer from "../components/center-container";

import FadeIn from "react-fade-in";

import styled from "styled-components";

import Circles from "../components/Circles"
import Spacer from "../components/Spacer"
import cloud from "../images/cloud.svg"

const valueDivWidth = 600

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-width: 650px;

  h1 {
    font-size: 3em;
    font-weight: normal;
    line-height: 1em;
  }

  a {
    font-size: 1.2em;
    color: black;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: min(9vw, 3em);
    }
  }
`

const StrokeText = styled.b`
  color: black;
  font-weight: 900;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1.7px;
  -webkit-text-stroke-color: black;
`

const StrokeTextWavy = styled(StrokeText)`
  text-decoration: wavy underline;
  text-decoration-thickness: 0.05em;
  text-underline-offset: 10px;
`

const DateDiv = styled.div`
  width: fit-content;
  margin: auto;
  padding: 3px;
  border: 3px solid;

  p {
    font-weight: bold;
  }
`

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 650px;
  margin: auto;

  h2 {
    font-size: 2em;
  }
`

const ValueDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 250px;
  padding: 10px;

  border: 3px solid;
  box-shadow: 10px 10px;

  h3 {
    font-weight: bold;
  }
`

const ValueContentDiv = styled.div`
  border: 3px solid;
  padding: 20px;
`

const ValueLink = styled(Link)`
  background-color: #ddd;
`

const Cloud = styled.img`
  position: absolute;
  top: -40px;
  right: -60px;
  max-width: 100px;
`

const IndexPage = () => {
  return (
    <Layout title="Home | Spark 💡">
      <Navbar />
      <FadeIn>
        <div>
          <Center>
            <Spacer height='40px' />
            <HeaderContainer>
              <h1>penn's premier <StrokeText>tech</StrokeText></h1>
              <Spacer height='20px' />
              <h1>and <StrokeTextWavy>design</StrokeTextWavy> community</h1>
              <Spacer height='40px' />
              <DateDiv>
                <p>EST. 2021</p>
              </DateDiv>
              <Spacer height='20px' />
              <a href="/mail" target="_blank" rel="noopener noreferrer">
                <b>Subscribe</b> to our newsletter for monthly updates!
              </a>
              <Circles radius={200} left='-400px' top='60px' />
            </HeaderContainer>
            <Spacer height='60px' />
            <ValuesContainer>
              <h2><StrokeText>OUR VALUES</StrokeText></h2>
              <ValueDiv>
                <h3>1. Accessible education</h3>
                <ValueContentDiv>
                  <p>Spark is open to <b>all experience levels,</b> including both beginner and more experienced developers & designers.
                    Beginners learn foundational design and development through our <b>Blue Branch</b> before diving into projects.</p>
                  <br />
                  <p>Outside of our bootcamp curriculum, we host workshops and events on a variety of creative topics.</p>
                  <ValueLink>Learn more about our branches</ValueLink>
                </ValueContentDiv>
                <Circles radius={100} right='-120px' top='100px' />
                <Cloud src={cloud} />
              </ValueDiv>
              <Spacer height='40px' />
              <ValueDiv>
                <h3>2. Hands-On Experience</h3>
                <ValueContentDiv>
                  <p>Our members take ownership of their learning and gain hands-on experience by <b>working with other designers and developers</b> on a creative project each semester.</p>
                  <br />
                  <p>In addition to working with our tech stack, our Red members gain experience <b>working with real-world clients and non-profits.</b></p>
                </ValueContentDiv>
              </ValueDiv>
            </ValuesContainer>
          </Center>
        </div>
      </FadeIn>
    </Layout>
  );
};

export default IndexPage;
