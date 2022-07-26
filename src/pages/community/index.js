import * as React from "react";
import FadeIn from 'react-fade-in';

import "./style.css";
import "../../styles/global.css";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Community from "../../components/sections/community";

import Spacer from "../../components/Spacer";
import HeaderContainer, { StrokeText } from "../../components/HeaderContainer";

const CommunityPage = () => {
  return (
    <Layout title="Community | Spark 💡">
      <Navbar />
      <FadeIn>
        <HeaderContainer>
          <h1>the spark <StrokeText>community</StrokeText></h1>
          <Spacer height='20px' />
          <a href="/mail" target="_blank" rel="noopener noreferrer">
            <b>Subscribe</b> to our newsletter for monthly updates!
          </a>
        </HeaderContainer>
        <Community />
      </FadeIn>
    </Layout>
  );
};

export default CommunityPage;
