import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 60px 0;
  background-color: #F9DB85;
  gap: 40px;

  .icon {
    font-size: 1.5em;
    color: black;
  }

  a + a {
    margin-left: 1em;
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
      {/* <div className="hit-counters">
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926316&style=0007&nbdigits=6&type=page&initCount=0" alt="hits" />
        <img src="https://hitwebcounter.com/counter/counter.php?page=7926317&style=0007&nbdigits=6&type=ip&initCount=0" alt="hits" />
        <img src="https://hitwebcounter.com/counter/counter.php?page=7933180&style=0007&nbdigits=6&type=page&initCount=0" alt="hits" />
        <img src="https://hitwebcounter.com/counter/counter.php?page=7933181&style=0007&nbdigits=6&type=ip&initCount=0" alt="hits" />
      </div> */}
      <VerticalContainer>
        <p className="subheader">Connect with Us</p>
        <a href="https://www.facebook.com/pennspark"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
        <a href="https://www.instagram.com/pennspark/"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
        <a href="https://github.com/PennSpark"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
        <a href="https://www.linkedin.com/company/pennspark/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
        <p>Penn Clubs</p>
        <p>Newsletter</p>
        <a class="custom-link" href="mailto:upennspark@gmail.com" target="_blank" rel="noopener noreferrer">upennspark@gmail.com</a>
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