import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Pic1 from "../images/community-gallery/pic1.jpg";
import Pic2 from "../images/community-gallery/pic2.jpg";
import Pic3 from "../images/community-gallery/pic3.jpg";
import Pic4 from "../images/community-gallery/pic4.jpg";
import Pic6 from "../images/community-gallery/pic6.jpg";
import Pic7 from "../images/community-gallery/pic7.jpg";
import Pic8 from "../images/community-gallery/pic8.jpg";
import Pic9 from "../images/community-gallery/pic9.jpg";
import Pic10 from "../images/community-gallery/pic10.jpg";
import Pic11 from "../images/community-gallery/pic11.jpg";
import Pic12 from "../images/community-gallery/pic12.jpg";
import Pic13 from "../images/community-gallery/pic13.jpg";
import Pic14 from "../images/community-gallery/pic14.jpg";

const CarouselWrapper = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;
`

const CarouselLabel = styled.p`
  margin: auto;
  width: fit-content;
  background-color: pink;
`

const CommunityGallery = () => {
  return (
    <CarouselWrapper>
      <Carousel>
        <div>
          <img src={Pic1} alt="pic" />
          <p className="legend">Fall 21 Showcase</p>
        </div>
        <div>
          <img src={Pic2} alt="pic" />
          <p className="legend">Post Bootcamp Terakawa</p>
        </div>
        <div>
          <img src={Pic13} alt="pic" />
          <p className="legend">Spark x Hack4Impact Mixer</p>
        </div>
        <div>
          <img src={Pic3} alt="pic" />
          <p className="legend">gym bros</p>
        </div>
        <div>
          <img src={Pic14} alt="pic" />
          <p className="legend">FA21 Board Bagel Brunch</p>
        </div>
        <div>
          <img src={Pic4} alt="pic" />
          <p className="legend">??</p>
        </div>
        <div>
          <img src={Pic6} alt="pic" />
          <p className="legend">bromance</p>
        </div>
        <div>
          <img src={Pic7} alt="pic" />
          <p className="legend">Locust Barricade</p>
        </div>
        <div>
          <img src={Pic8} alt="pic" />
          <p className="legend">Ken's Seafood</p>
        </div>
        <div>
          <img src={Pic9} alt="pic" />
          <p className="legend">Squishies :D</p>
        </div>
        <div>
          <img src={Pic10} alt="pic" />
          <p className="legend">Hey Day</p>
        </div>
        <div>
          <img src={Pic11} alt="pic" />
          <p className="legend">art .. ??</p>
        </div>
        <div>
          <img src={Pic12} alt="pic" />
          <p className="legend">First GBM</p>
        </div>
      </Carousel>
      <CarouselLabel>
        Spring 2022 Showcase
      </CarouselLabel>
    </CarouselWrapper>
  )
}

export default CommunityGallery;
