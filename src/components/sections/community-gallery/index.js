import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Pic1 from "./img/pic1.jpg";
import Pic2 from "./img/pic2.jpg";
import Pic3 from "./img/pic3.jpg";
import Pic4 from "./img/pic4.jpg";
import Pic6 from "./img/pic6.jpg";
import Pic7 from "./img/pic7.jpg";
import Pic8 from "./img/pic8.jpg";
import Pic9 from "./img/pic9.jpg";
import Pic10 from "./img/pic10.jpg";
import Pic11 from "./img/pic11.jpg";
import Pic12 from "./img/pic12.jpg";
import Pic13 from "./img/pic13.jpg";
import Pic14 from "./img/pic14.jpg";
import Pic15 from "./img/pic15.jpg";
import Pic16 from "./img/pic16.jpg";
import Pic17 from "./img/pic17.jpg";
import Pic18 from "./img/pic18.jpg";
import Pic19 from "./img/pic19.jpg";
import Pic20 from "./img/pic20.jpg";
import Pic21 from "./img/pic21.jpg";
import Pic22 from "./img/pic22.jpg";



import "./style.css"

class CommunityGallery extends React.Component {
  render() {
    return (
      <Carousel>
        <div>
          <img  src={Pic22} alt="pic" />
          <p className="legend">{"fall 2024 retreat to the poconos!"}</p>
        </div>
        
        <div >
          <img  src={Pic21} alt="pic" />
          <p className="legend">{"generations of spark"}</p>
        </div>

        <div >
          <img  src={Pic20} alt="pic" />
          <p className="legend">{"fall '24 newbies @ retreat!"}</p>
        </div>

        <div >
          <img  src={Pic19} alt="pic" />
          <p className="legend">{"who said spark boys aren't cute?"}</p>
        </div>

        <div >
          <img  src={Pic18} alt="pic" />
          <p className="legend">{"<3"}</p>
        </div>

        <div>
          <img src={Pic17} alt="pic" />
          <p className="legend">Spring '24 Retreat</p>
        </div>

        <div>
          <img src={Pic16} alt="pic" />
          <p className="legend">spark boy band</p>
        </div>

        <div>
          <img src={Pic15} alt="pic" />
          <p className="legend">At the beach!</p>
        </div>

        <div>
          <img src={Pic1} alt="pic" />
          <p className="legend">Fall '21 Showcase</p>
        </div>

        <div>
          <img src={Pic2} alt="pic" />
          <p className="legend">Post-Bootcamp Terakawa</p>
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
          <p className="legend">Fall '21 Board Bagel Brunch</p>
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
    );
  }
}

export default CommunityGallery;
