import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  background-color: #eee;
  gap: 40px;
`

const VerticalContainer = styled.div`

  .subheader {
    font-weight: bold;
    margin-bottom: 1em;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <VerticalContainer>
        <p className="subheader">Connect with us</p>
        <p>Penn Clubs</p>
        <p>Newsletter</p>
      </VerticalContainer>
      <VerticalContainer>
        <p className="subheader">About Us</p>
        <p>About Spark</p>
        <p>Our Community</p>
        <p>Our Branches</p>
      </VerticalContainer>
      <VerticalContainer>
        <p className="subheader">Our Work</p>
        <p>Spring 2022</p>
        <p>Fall 2021</p>
        <p>Spring 2021</p>
      </VerticalContainer>
      <VerticalContainer>
        <p className="subheader">Work With Us</p>
        <p>Why Spark?</p>
        <p>Pitch Deck</p>
        <p>Project Application</p>
        <p>Sponsor Us</p>
      </VerticalContainer>
    </FooterContainer>
  )
}

export default Footer