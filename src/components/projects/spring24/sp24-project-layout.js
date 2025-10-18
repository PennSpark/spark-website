import React from "react"
import FadeIn from "react-fade-in"
import { Container } from "semantic-ui-react"
import Helmet from "react-helmet"

import "/src/components/projects/project-layout.css"

export default class ProjectLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const demoUrl = this.props.demoUrl
    let demoUrlLabel
    if (!demoUrl) {
      demoUrlLabel = ""
    } else {
      demoUrlLabel = "Demo"
    }

    const sourcecodeUrl = this.props.sourcecodeUrl
    let sourcecodeLabel
    let sourcecodeDivider
    if (!sourcecodeUrl) {
      sourcecodeLabel = ""
      sourcecodeDivider = ""
    } else {
      sourcecodeDivider = ""
      sourcecodeLabel = "Source Code"
    }

    if (sourcecodeUrl && demoUrl) {
      sourcecodeDivider = " | "
    }

    const demoVisuals = this.props.demoVisuals
    let demoVisualsContent
    if (!demoVisuals) {
      demoVisualsContent = <></>
    } else {
      demoVisualsContent = (
        <>
          <h1>Demo</h1>
          <br />
          {this.props.demoVisuals}
          <br />
          <br />
        </>
      )
    }

    return (
      <html lang="en">
        <head>
          <Helmet>
            <title>{this.props.title} | Spark</title>
          </Helmet>
        </head>

        <main>
          <body
            style={{
              margin: "0px",
              padding: "0px",
              paddingBottom: "50px",
              backgroundColor: this.props.bgColor,
            }}
          >
            <div
              className="header-img"
              style={{
                width: "100%",
                backgroundImage: `url(${this.props.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="nav-links"
                style={{
                  maxWidth: "920px",
                  margin: "auto",
                  paddingTop: "30px",
                }}
              >
                <div style={{ float: "left" }}>
                  <p>
                    <em>
                      <a href="/"><div className="back-btn">
                        &larr; Back to Projects
                      </div></a>
                    </em>
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: "80px",
                  paddingTop: "60px",
                  textAlign: "center",
                }}
              >
                <div style={{ maxWidth: "920px", margin: "auto" }}>
                  <FadeIn>
                    <h1 style={{ fontSize: "3rem" }}>{this.props.projName}</h1>
                    <br />
                    <h3>{this.props.blurb}</h3>
                    <br />
                    <p style={{ fontSize: "1.2rem" }}>
                      <em>{this.props.people}</em>
                    </p>
                    <br />

                    <p>
                      <strong>
                        <a
                          href={this.props.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {demoUrlLabel}
                        </a>
                      </strong>
                      {sourcecodeDivider}
                      <a
                        href={this.props.sourcecodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {sourcecodeLabel}
                      </a>
                    </p>
                  </FadeIn>
                </div>
              </div>
            </div>
            <Container
              style={{
                paddingTop: "60px",
                backgroundColor: this.props.bgColor,
              }}
            >
              <div style={{ maxWidth: "920px", margin: "auto", zIndex: "5" }}>
                <FadeIn>
                  <h1>Background</h1>
                  <br />
                  <p>{this.props.background}</p>
                  <br />
                  <br />

                  {this.props.goals && (
                    <>
                      <h1>Project Goals</h1>
                      <br />
                      <p>{this.props.goals}</p>
                      <br />
                      <br />
                    </>
                  )}

                  {demoVisualsContent}

                  <h1>Timeline</h1>
                  <br />
                  <p>{this.props.timeline}</p>
                  <br />
                  <br />

                  <h1>Challenges</h1>
                  <br />
                  <p>{this.props.challenges}</p>
                  <br />
                  <br />

                  {this.props.takeaways && (
                    <>
                      <h1>Takeaways</h1>
                      <br />
                      <p>{this.props.takeaways}</p>
                      <br />
                      <br />
                    </>
                  )}

                  <h1>Looking Forward</h1>
                  <br />
                  <p>{this.props.lookingForward}</p>
                </FadeIn>
              </div>
            </Container>
          </body>
        </main>
      </html>
    )
  }
}
