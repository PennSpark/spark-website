import * as React from "react";
import "../styles/global.css";
import "../styles/animations.css";
import "./style.css"

import Layout from "../components/layout";
import Navbar from "../components/navbar";

import Overview from "../components/sections/overview";
import CenterContainer from "../components/center-container";
import Spacer from "../components/spacer";

import FadeIn from "react-fade-in";

import styled from "styled-components";

const valueDivWidth = 600
const circleSpacing = 20

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  max-width: 650px;
  margin: auto;
  padding-top: 30px;

  h1 {
    font-size: 3em;
    font-weight: normal;
    line-height: 1em;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

const StrokeText = styled.b`
  color: black;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
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
  gap: 50px;
`

const ValueDiv = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 650px;
  padding: 10px;

  border: 3px solid;
  box-shadow: 10px 10px;
`

const ValueContentDiv = styled.div`
  border: 3px solid;
  padding: 20px;
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => props.radius}px;
  height: ${props => props.radius}px;
  border-radius: 50%;

  border: 3px solid;
`

const Circles = (props) => {
  return (
    <div style={{ position: 'absolute', left: props.left, top: props.top }}>
      <Circle radius={props.radius + circleSpacing * 5}>
        <Circle radius={props.radius + circleSpacing * 4}>
          <Circle radius={props.radius + circleSpacing * 3}>
            <Circle radius={props.radius + circleSpacing * 2}>
              <Circle radius={props.radius + circleSpacing}>
                <Circle radius={props.radius} />
              </Circle>
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </div>
  )
}

const IndexPage = () => {
  return (
    <Layout title="Home | Spark 💡">
      <Navbar />
      <FadeIn>
        {/* <div id="header-section">
          <h1>
            we are <span id="header-spark-text">spark</span>
          </h1>
        </div>
        <CenterContainer>
          <div className="home-btns-container">
            <a href="/about">
              <button>Learn More &rarr;</button>
            </a>
            <Spacer />
            <a href="/mail" target="_blank" rel="noopener noreferrer">
              <button>Subscribe to Our Newsletter &rarr;</button>
            </a>
          </div>
        </CenterContainer>
        <Overview /> */}

        {/* redesign code */}
        <div>
          <HeaderContainer>
            <h1>penn's premiere <StrokeText>tech</StrokeText></h1>
            <h1>and <StrokeTextWavy>design</StrokeTextWavy> community</h1>
            <DateDiv>
              <p>EST. 2021</p>
            </DateDiv>
            <a href="/mail" target="_blank" rel="noopener noreferrer">
              <b>Subscribe</b> to our newsletter for monthly updates!
            </a>
            <Circles radius={200} left='-300px' top='100px' />
          </HeaderContainer>
          <h2><StrokeText>OUR VALUES</StrokeText></h2>
          <ValuesContainer>
            <ValueDiv>
              <h3>1. Accessible education</h3>
              <ValueContentDiv>
                <p>Spark is open to all experience levels, including both beginner and more experienced developers & designers. Beginners learn foundational design and development through our Blue Branch before diving into projects.</p>
                <p>Outside of our bootcamp curriculum, we host workshops and events on a variety of creative topics.</p>
              </ValueContentDiv>
            </ValueDiv>
            <ValueDiv>
              <h3>2. Hands-On Experience</h3>
              <ValueContentDiv>
                <p>Our members take ownership of their learning and gain hands-on experience by working with other designers and developers on a creative project each semester.</p>
                <p>In addition to working with our tech stack, our Red members gain experience working with real-world clients and non-profits.</p>
              </ValueContentDiv>
            </ValueDiv>
          </ValuesContainer>
          <Circles radius={100} />
        </div>
      </FadeIn>
    </Layout>
  );
};

export default IndexPage;
