import React from "react"
import { Helmet } from "react-helmet"

// styling
// import "../styles/bootstrap.css" // from react-bootstrap
// import "../styles/global.css"

class ProjectLayout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <Helmet>
            <title>Spark Projects</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
          </Helmet>
        </head>
        <main>
          <body style={{ margin: "0px", padding: "0px" }}>
            <div style={{display: "none"}}><img src="https://hitwebcounter.com/counter/counter.php?page=7981409&style=0007&nbdigits=6&type=ip&initCount=0" /></div>
            {this.props.children}
          </body>
        </main>
      </html>
    )
  }
}

export default ProjectLayout
