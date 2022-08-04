import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ValueContainer = styled.div`
  max-width: 319px;
  padding: 10px;
  border: var(--border);
  box-shadow: 10px 10px;

  p {
    margin-bottom: 20px;
  }
`

const ValueContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; ${'' /* Needed to keep link centered */}
  border: var(--border);
  padding: 20px 30px;
`

const ValueLink = styled(Link)`
  white-space: nowrap;
  overflow: hidden;
  padding: 10px;
  font-size: 0.9em;
  font-weight: bold;
  text-decoration: none;
  color: var(--black);
  background-color: #ddd;
  border-radius: 100px;
`

const Value = props => {
  return (
    <ValueContainer>
      <h3>{props.title}</h3>
      <ValueContent>
        {props.children}
        <ValueLink to={props.link}>Learn more about our {props.value}</ValueLink>
      </ValueContent>
    </ValueContainer>
  )
}

export default Value