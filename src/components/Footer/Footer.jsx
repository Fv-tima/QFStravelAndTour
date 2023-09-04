import React from "react";
import {
  FooterContainer,
  FooterContent,
  SocialContainer,
  FooterLogo,
  AboutText,
  FooterCon,
  Copy,
  Privacy
} from "./Footer.styled";
import FLogo from "../../assets/images/Flogo.png"
import Instagram from "../../assets/svg/instagram.svg";
import Fb from "../../assets/svg/fb.svg";
import Twitter from "../../assets/svg/twitter.svg";

export default function Footer() {
  return (
    <FooterCon>
    <FooterContainer>
       <FooterLogo>
          <img src={FLogo} />
        </FooterLogo>
        <AboutText>
          <h3>Explore Our Website</h3>
        Ready to start planning your next adventure? Explore our website to learn more about our services and destinations. You can browse our tour packages, learn about our study abroad programs, and read our travel guides and tips.
<p><span>Email:</span> info@qfstravelandtourgh.com</p>
        </AboutText>
      <FooterContent>
        <h3>Accra Office</h3>
        <p>
        C02 Manyo Close <br />
        Adabraka
        </p>
        <p>Tel: 0554791207/ 0533695188</p>
        </FooterContent>
          <FooterContent>
            <h3>Sunyani Office</h3>
            <p>Adjacent Fidelity Bank, off VRA Road</p>
            <p>Tel: 0244967595</p>
          </FooterContent>
          <FooterContent>
          <h3>Follow Us</h3>
          <SocialContainer>
          <a href=""><img src={Fb}/> <p>facebook</p></a>
          <a href=""><img src={Twitter} /> <p>twitter</p></a>
         <a href=""><img src={Instagram} /> <p>instagram</p> </a> 
        </SocialContainer>
        </FooterContent>
    </FooterContainer>
    <Copy>
        <p id="copyright">© 2023 QFS Travel & Tours. All Rights Reserved </p>
        <p>Designed with ❤️ by Fleet Labs Ghana</p>
        <Privacy>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Cookies Settings</a>
        </Privacy>
        </Copy>
    </FooterCon>
  );
}
