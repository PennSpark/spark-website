import * as React from "react";
import "../styles/global.css";
import "../styles/animations.css";
import "./style.css";

import Layout from "../components/layout";
import Navbar from "../components/navbar";
import RecruitingBanner from "../components/recruiting-banner/recruiting-banner";

import Overview from "../components/sections/overview";
import CenterContainer from "../components/center-container";

import FadeIn from "react-fade-in";

import styled from "styled-components";

import Circles from "../components/Circles";
import Spacer from "../components/Spacer";

const valueDivWidth = 600;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 650px;
  margin: auto;

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
`;

const StrokeText = styled.b`
  color: black;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1.7px;
  -webkit-text-stroke-color: black;
`;

const StrokeTextWavy = styled(StrokeText)`
  text-decoration: wavy underline;
  text-decoration-thickness: 0.05em;
  text-underline-offset: 10px;
`;

const DateDiv = styled.div`
  width: fit-content;
  margin: auto;
  padding: 3px;
  border: 3px solid;

  p {
    font-weight: bold;
  }
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 650px;
  margin: auto;

  h2 {
    font-size: 2em;
  }
`;

const ValueDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 250px;
  padding: 10px;

  border: 3px solid;
  box-shadow: 10px 10px;
`;

const ValueContentDiv = styled.div`
  border: 3px solid;
  padding: 20px;
`;

const IndexPage = () => {
  return (
    <Layout title="Home | Spark 💡">
      <Navbar />
      <FadeIn>
        <RecruitingBanner />
        <div id="header-section">
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
        <Overview />

        {/* redesign code
        <div>
          <Spacer height='40px' />
          <HeaderContainer>
            <h1>penn's premiere <StrokeText>tech</StrokeText></h1>
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
            <Circles radius={200} left='-300px' top='60px' />
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
              </ValueContentDiv>
              <Circles radius={100} left='250px' top='60px' />
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
        </div> */}
      </FadeIn>
    </Layout>
  );
};

export default IndexPage;
