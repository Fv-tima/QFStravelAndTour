import React from 'react'
import { PartnersContainer, Partner } from './Partners.styled';
import image1 from "../../assets/images/img1.png";
import image2 from "../../assets/images/img2.png";
import image3 from "../../assets/images/img3.png";
import image4 from "../../assets/images/img4.png";
import image5 from "../../assets/images/img5.png";
function Partners() {
  return (
    <Partner>
      <h1>
        Our <span>Partners</span>
      </h1>
      <PartnersContainer>
        <img src={image1} alt="Partner 1" />
        <img src={image2} alt="Partner 2" />
        <img src={image3} alt="Partner 3" />
        <img src={image4} alt="Partner 4" />
        <img src={image5} alt="Partner 5" />
      </PartnersContainer>
    </Partner>
  );
}

export default Partners
