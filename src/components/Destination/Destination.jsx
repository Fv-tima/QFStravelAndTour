import React from "react";
import serviceVector from "../../assets/svg/serVector.svg";
import Des1 from "../../assets/images/Des1.png"
import Des2 from "../../assets/images/Des2.png"
import Des3 from "../../assets/images/Des3.png"
import Des4 from "../../assets/images/Des4.png"
import Des5 from "../../assets/images/Des5.png"
import Des6 from "../../assets/images/Des6.png"

import Ecl1 from "../../assets/images/Ellipse 1.png"
import Ecl2 from "../../assets/images/Ellipse 2.png"
import Ecl3 from "../../assets/images/Ellipse 3.png"
import { DestinationContainer, DestinationCon, DestinationImg, Eclipse } from "./Destination.styled";
export default function Destination() {
  return (
    <DestinationContainer>
      <img src={serviceVector} />
      <h1>Popular Destinations</h1>
      <Eclipse>
        <div>
          <img src={Ecl1} />
          <img src={Ecl2} />
          <img src={Ecl3} />
        </div>  
        <h2> <span>10K+</span> Satisfied Customer</h2>
      </Eclipse>
      <DestinationCon>
        <DestinationImg>
          <img src={Des1} className="pos"/>
          <div>
            <img src={Des2} id="dests"/>
            <img src={ Des3 } id="dests" />
          </div> 
        </DestinationImg>
        <DestinationImg>
        <div>
            <img src={ Des4 } id="dests" />
            <img src={ Des5 } id="dests" />
          </div>
          <img src={Des6} />
        </DestinationImg>
      </DestinationCon>
    </DestinationContainer>
  );
}
