import React from "react";
import "./style.css";
import CenterContainer from "../center-container";
import CustomLink from "../custom-link";

export default function Footer() {
  return (
    <CenterContainer>
      <div className="custom-footer">
        <div className="hit-counters">
          <img src="https://hitwebcounter.com/counter/counter.php?page=7926316&style=0007&nbdigits=6&type=page&initCount=0" alt="hits" />
          <img src="https://hitwebcounter.com/counter/counter.php?page=7926317&style=0007&nbdigits=6&type=ip&initCount=0" alt="hits" />
          <img src="https://hitwebcounter.com/counter/counter.php?page=7933180&style=0007&nbdigits=6&type=page&initCount=0" alt="hits" />
          <img src="https://hitwebcounter.com/counter/counter.php?page=7933181&style=0007&nbdigits=6&type=ip&initCount=0" alt="hits" />
        </div>
        <p>
          Made with &#9829; by Spark
          <br />
          <CustomLink
            link="https://facebook.com/pennspark"
            text="Facebook"
          />{" "}
          &bull;{" "}
          <CustomLink link="https://instagram.com/pennspark" text="Instagram" />{" "}
          &bull; <CustomLink link="https://medium.com/@pennspark" text="Blog" />{" "}
          &bull;{" "}
          <CustomLink link="https://github.com/pennspark" text="GitHub" />{" "}
          &bull;{" "}
          <CustomLink
            link="https://www.linkedin.com/company/69605156/"
            text="LinkedIn"
          />{" "}
          &bull;{" "}
          <CustomLink
            link="https://pennclubs.com/club/penn-spark"
            text="PennClubs"
          />{" "}
          &bull; <CustomLink link="/mail" text="Newsletter" />
          <br />
          <span className="bold">Contact Us</span>:{" "}
          <CustomLink
            link="mailto:upennspark@gmail.com"
            text="upennspark@gmail.com"
          />
        </p>
      </div>
    </CenterContainer>
  );
}
