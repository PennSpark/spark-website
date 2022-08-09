import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from "../images/blue-lightbulb.svg"

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 60px 80px;
  background-color: #F9DB85;
  gap: 40px;

  p {
    margin-bottom: 10px;
  }

  .icon {
    font-size: 1.5em;
    color: black;
  }

  a + a {
    margin-left: 1em;
  }

  .subheader {
    font-weight: bold;
    margin-bottom: 1em;
  }

  @media only screen and (max-width: 769px) {
    display: block;
    padding: 60px 20px;

    div + div {
      margin-top: 20px;
    }
  }
`

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const Footer = () => {
  return (
    <FooterContainer>
      {/* <div className="hit-counters">
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926316&style=0007&nbdigits=6&type=page&initCount=0" alt="hits" />
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926317&style=0007&nbdigits=6&type=ip&initCount=0" alt="hits" />
        <img src="https://hitwebcounter.com/counter/counter.php?page=7933180&style=0007&nbdigits=6&type=page&initCount=0" alt="hits" />
        <img src="https://hitwebcounter.com/counter/counter.php?page=7933181&style=0007&nbdigits=6&type=ip&initCount=0" alt="hits" />
      </div> */}
      <FooterDiv>
        <img src={Logo} />
        <div>
          <p className="subheader">Connect with Us</p>
          <div style={{ marginBottom: "20px" }}>
            <a href="https://www.facebook.com/pennspark"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
            <a href="https://www.instagram.com/pennspark/"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
            <a href="https://github.com/PennSpark"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
            <a href="https://www.linkedin.com/company/pennspark/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
          </div>
          <p>Penn Clubs</p>
          <p>Newsletter</p>
          <a className="custom-link" href="mailto:upennspark@gmail.com" target="_blank" rel="noopener noreferrer">upennspark@gmail.com</a>
        </div>
      </FooterDiv>
      <div>
        <p className="subheader">About Us</p>
        <p>About Spark</p>
        <p>Our Community</p>
        <p>Our Branches</p>
      </div>
      <div>
        <p className="subheader">Our Work</p>
        <p>Spring 2022</p>
        <p>Fall 2021</p>
        <p>Spring 2021</p>
      </div>
      <div>
        <p className="subheader">Work With Us</p>
        <p>Why Spark?</p>
        <p>Pitch Deck</p>
        <p>Project Application</p>
        <p>Sponsor Us</p>
      </div>
    </FooterContainer>
  )
}

export default Footer