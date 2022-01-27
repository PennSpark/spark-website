import React from "react";

import "./style.css";

class CustomLink extends React.Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        {this.props.text}
      </a>
    );
  }
}

export default CustomLink;
