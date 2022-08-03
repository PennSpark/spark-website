import * as React from "react";
import FadeIn from 'react-fade-in';
import { useState } from "react";

import "../../styles/global.css";

import CommunityGallery from "../../components/sections/community-gallery";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import Spacer from "../../components/Spacer";
import HeaderContainer, { StrokeText } from "../../components/HeaderContainer";

const CommunityPage = () => {
  const [semester, setSemester] = useState("SPRING 2022")
  return (
    <Layout title="Community | Spark 💡">
      <FadeIn>
        <HeaderContainer>
          <h1>the spark <StrokeText>community</StrokeText></h1>
          <Spacer height='20px' />
        </HeaderContainer>
        <div id="community-section" className="content-section">
          <p className="larger-text">
            Community is at the <b>center of what we do and how we work.</b> Beyond just collaboration inside the classroom,
            we also strongly value the social relationships that our members share.
            Learn more about the people behind Spark!
          </p>
          <Spacer height="50px" />
          <CommunityGallery />
          <h2><StrokeText style={{ fontSize: "2em" }}>SPRING 2022</StrokeText></h2>
        </div>
      </FadeIn>
    </Layout>
  )
}

export default CommunityPage;