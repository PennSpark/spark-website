import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BoxContainer = styled.div`
  max-width: 319px;
  padding: 10px;
  border: var(--border);
  box-shadow: 10px 10px;
  background-color: ${props => props.backgroundColor};

  h3 {
    color: ${props => props.textColor};
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 20px;
  }

  .box-subheader {
    margin-left: -8px;
    margin-bottom: 10px;
    font-weight: bold;
  }
`

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  border: var(--border);
  padding: 20px 24px;
  background-color: var(--white);
`

 export const BoxLink = styled(Link)`
  white-space: nowrap;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  font-size: 0.9em;
  font-weight: bold;
  text-decoration: none;
  color: var(--black);
  background-color: #ddd;
  border-radius: 100px;
`

const Box = props => {
  return (
    <BoxContainer backgroundColor={props.backgroundColor} textColor={props.textColor}>
      <h3>{props.title}</h3>
      <BoxContent>
        {props.children}
      </BoxContent>
    </BoxContainer>
  )
}

export default Box