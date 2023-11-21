import React from 'react'
import { CertContainer, Cert } from './Cert.styled';
import image1 from "../../assets/images/img1.png";
import image2 from "../../assets/images/img2.png";

function Partners() {
  return (
    <Cert>
      <h1>
        Certified by
      </h1>
      <CertContainer>
        <img src={image1} alt="Cert 1" />
        <img src={image2} alt="Cert 2" />
      </CertContainer>
    </Cert>
  );
}

export default Partners
