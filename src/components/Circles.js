import * as React from "react"
import styled from "styled-components"

const circleSpacing = 20

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => props.radius}px;
  height: ${props => props.radius}px;
  border-radius: 50%;
  border: 3px solid;
`

const Circles = (props) => {
  return (
    <div style={{ position: 'absolute', left: props.left, top: props.top }}>
      <Circle radius={props.radius + circleSpacing * 5}>
        <Circle radius={props.radius + circleSpacing * 4}>
          <Circle radius={props.radius + circleSpacing * 3}>
            <Circle radius={props.radius + circleSpacing * 2}>
              <Circle radius={props.radius + circleSpacing}>
                <Circle radius={props.radius} />
              </Circle>
            </Circle>
          </Circle>
        </Circle>
      </Circle>
    </div>
  )
}

export default Circles