import React from "react"
import { Label } from "semantic-ui-react"

export default class LabelRed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Label color="blush" style={{marginBottom:"6px"}}>❤️ Red</Label>
  }
}
