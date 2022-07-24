import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  background-color: #eee;
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>Connect with us</p>
      <p>About us</p>
    </FooterContainer>
  )
}

export default Footer