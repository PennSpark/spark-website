import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  background-color: #eee;
  gap: 40px;

  .icon {
    font-size: 1.5em;
    color: black;
  }

  .a + .a {
    margin-left: 20px;
  }
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
        <a href="https://www.facebook.com/pennspark"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
        <a href="https://www.instagram.com/pennspark/"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
        <a href="https://github.com/PennSpark"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
        <a href="https://www.linkedin.com/company/pennspark/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
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