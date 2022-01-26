import React from "react";
import "./style.css";
import "../../styles/animations.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Made with &#9829; by Spark
        <br />
        <a
          href="https://facebook.com/pennspark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        {" "}&bull;{" "}
        <a
          href="https://instagram.com/pennspark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        {" "}&bull;{" "}
        <a
          href="https://medium.com/@pennspark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        {" "}&bull;{" "}
        <a
          href="https://github.com/pennspark"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {" "}&bull;{" "}
        <a
          href="https://www.linkedin.com/company/69605156/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" "}&bull;{" "}
        <a
          href="https://pennclubs.com/club/penn-spark"
          target="_blank"
          rel="noopener noreferrer"
        >
          PennClubs
        </a>
        {" "}&bull;{" "}
        <a href="/mail">Newsletter</a>
        <br />
        <span className="bold">Contact Us</span>:{" "}
        <a
          href="mailto:upennspark@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          upennspark@gmail.com
        </a>
      </p>
    </div>
  );
}
