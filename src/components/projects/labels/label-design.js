import React from "react"
import { Label } from "semantic-ui-react"

export default class LabelDesign extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Label color="blush" style={{marginBottom:"6px"}}>🎨 Design</Label>
  }
}
