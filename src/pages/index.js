import * as React from "react";
import "../styles/global.css";
import "../styles/animations.css";
import "./style.css";

import Layout from "../components/layout";
import Navbar from "../components/navbar";
import RecruitingBanner from "../components/recruiting-banner/recruiting-banner";
import ShowcaseBanner from "../components/recruiting-banner/showcase-banner";

import Overview from "../components/sections/overview";
import CenterContainer from "../components/center-container";

import FadeIn from "react-fade-in";

import styled from "styled-components";

import Circles from "../components/Circles";
import Spacer from "../components/Spacer";
import { current } from "@reduxjs/toolkit";


import { RECRUITING_DEADLINE, SHOW_APPS_DATE } from "../components/sections/join-us/join-us";
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
  const currentDate = new Date();
  const shouldDisplayBanner = (currentDate > SHOW_APPS_DATE) || (currentDate < RECRUITING_DEADLINE);
  return (
    <Layout title="Home | Spark 💡">
      <Navbar />
      <FadeIn>
        {
            // <RecruitingBanner />
            // <ShowcaseBanner />
        }
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
          </div>
        </CenterContainer>
        <Overview />
      </FadeIn>
    </Layout>
  );
};

export default IndexPage;
