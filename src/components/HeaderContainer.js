import styled from "styled-components"

export const StrokeText = styled.b`
  color: black;
  font-weight: 900;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1.7px;
  -webkit-text-stroke-color: black;
`

export const StrokeTextWavy = styled(StrokeText)`
  text-decoration: wavy underline;
  text-decoration-thickness: 0.05em;
  text-underline-offset: 10px;
`

const HeaderContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

h1 {
  font-size: 3em;
  font-weight: normal;
  line-height: 1em;
}

a {
  font-size: 1.2em;
  color: black;
  text-decoration: none;
}

@media (max-width: 768px) {
  h1 {
    font-size: min(9vw, 3em);
  }
}
`

export default HeaderContainer