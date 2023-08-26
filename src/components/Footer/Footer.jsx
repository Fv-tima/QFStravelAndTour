import React from "react";
import {
  FooterContainer,
  FooterContent,
  SocialContainer,
  FooterLogo,
  AboutText,
} from "./Footer.styled";
import Logo from "../../assets/images/F logo.png";
import Instagram from "../../assets/svg/instagram.svg";
import Linkedin from "../../assets/svg/linkedin.svg";
import Fb from "../../assets/svg/fb.svg";
import Twitter from "../../assets/svg/twitter.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent id="about">
        <FooterLogo>
          <img src={Logo} />
        </FooterLogo>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur. Vestibulum tellus cras orci
          natoque malesuada sed dictum lacinia. In vitae amet varius hendrerit
          tincidunt. Sed id ac magna laoreet proin duis. Tristique lacus
          pulvinar mi fermentum dignissim vel laoreet volutpat in. <br />
          {/* details as discuss here */}
        </AboutText>
        <p id="copyright">© 2023 QFS Travel & Tours. All Rights Reserved </p>
      </FooterContent>
      <FooterContent>
        <h3>Office</h3>
        <p>
          Jln.Galau terus no 23. <br />
          Jakarta selatan
        </p>
        <h3>Follow us</h3>
        <SocialContainer>
          <img src={Instagram} />
          <img src={Linkedin} />
          <img src={Fb} />
          <img src={Twitter} />
        </SocialContainer>
      </FooterContent>
      <FooterContent>
        <h3>Contact</h3>
        <a href="#">Ipsum</a>
        <a href="#">Lorem</a>
        <a href="#">lorem Ipsum</a>
        <a href="#">ipsumlorem</a>
      </FooterContent>
    </FooterContainer>
  );
}
