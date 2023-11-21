import React from 'react'
import { CertContainer, Cert } from './Cert.styled';
import svg1 from "../../assets/svg/aeg.svg"
import svg2 from "../../assets/svg/BritishCouncil.svg";

function Partners() {
  return (
    <Cert>
      <h1>
        Certified by
      </h1>
      <CertContainer>
        <img src={svg1} alt="Cert 1" />
        <img src={svg2} alt="Cert 2" />
      </CertContainer>
    </Cert>
  );
}

export default Partners
