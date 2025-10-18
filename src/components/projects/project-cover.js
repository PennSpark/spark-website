import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import LabelCoding from "./labels/label-coding"
import LabelDesign from "./labels/label-design"
import LabelClient from "./labels/label-client"
import LabelCreative from "./labels/label-creative"
import LabelBlue from "./labels/label-blue"
import LabelRed from "./labels/label-red"
import FadeIn from "react-fade-in"

export default class Project extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isCodingProject = this.props.isCodingProject
    let codingLabel
    if (isCodingProject == "True") {
      codingLabel = <LabelCoding />
    } else {
      codingLabel = <></>
    }

    const isDesignProject = this.props.isDesignProject
    let designLabel
    if (isDesignProject == "True") {
      designLabel = <LabelDesign />
    } else {
      designLabel = <></>
    }

    const isClientProject = this.props.isClientProject
    let clientLabel
    if (isClientProject == "True") {
      clientLabel = <LabelClient />
    } else {
      clientLabel = <></>
    }

    const isCreativeProject = this.props.isCreativeProject
    let creativeLabel
    if (isCreativeProject == "True") {
      creativeLabel = <LabelCreative />
    } else {
      creativeLabel = <></>
    }

    const isBlueProject = this.props.isBlueProject
    let blueLabel
    if (isBlueProject == "True") {
      blueLabel = <LabelBlue />
    } else {
      blueLabel = <></>
    }

    const isRedProject = this.props.isRedProject
    let redLabel
    if (isRedProject == "True") {
      redLabel = <LabelRed />
    } else {
      redLabel = <></>
    }

    const additionalLabels = this.props.additionalLabels
    if (additionalLabels == "") {
      additionalLabels = <></>
    }

    return (
      <FadeIn>
        <a href={this.props.url}>
          <Card style={{width: "100%"}}>
            <Image src={this.props.img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.title}</Card.Header>
              <Card.Meta>
              {additionalLabels}{codingLabel}{designLabel}{clientLabel}{creativeLabel}{blueLabel}{redLabel}
                {/* <span className="date">Joined in 2015</span> */}
              </Card.Meta>
              <Card.Description>{this.props.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="users" />
              {this.props.people}
            </Card.Content>
          </Card>
        </a>
      </FadeIn>
    )
  }
}
