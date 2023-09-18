import React from "react";
import {
  FooterContainer,
  FooterContent,
  SocialContainer,
  FooterLogo,
  AboutText,
  FooterCon,
  FooterInnerCon,
  Copy,
  Privacy
} from "./Footer.styled";
import FLogo from "../../assets/images/Flogo.png";
import newlogo from "../../assets/images/newlogo.png";
import Instagram from "../../assets/svg/instagram.svg";
import Fb from "../../assets/svg/fb.svg";
import Twitter from "../../assets/svg/twitter.svg";

export default function Footer () {
  return (
    <FooterCon>
<<<<<<< HEAD
      <FooterContainer>
        <FooterLogo>
          <img id='new' src={ newlogo } />
        </FooterLogo>
        <FooterInnerCon>
          <AboutText>
            <h3 id="explore">Explore Our Website</h3>
            <p id="explore">Ready to start planning your next adventure? Explore our website to learn more about our services and destinations. You can browse our tour packages, learn about our study abroad programs, and read our travel guides and tips. </p>
            <p id="email"><span>Email:</span> info@qfstravelandtourgh.com</p>
            <p id="learn">Learn more about our services and destinations. You can browse our tour packages, learn about our study abroad programs, and read our travel guides and tips.</p>
          </AboutText>
=======
    <FooterContainer>
        <FooterInnerCon>
        <AboutText>
        <FooterLogo>
          <img src={FLogo} />
        </FooterLogo>
          <h3>Explore Our Website</h3>
          Learn more about our services and destinations. You can browse our tour packages, learn about our study abroad programs, and read our travel guides and tips.
        </AboutText>
        <div>
        <div className="footer">
      <FooterContent>
        <h3>Accra Office</h3>
        <p>
        C02 Manyo Close Adabraka
        </p>
        <p>Tel:
        <a href="tel:0554791207">0554791207</a>/
        <a href="tel:0533695188"> 0533695188</a>
        </p>
        </FooterContent>
>>>>>>> 94a5d86e07e378b7230d38cb572f9ecf8252637b
          <FooterContent>
            <h3 >Accra Office</h3>
            <p id="address">
              C02 Manyo Close, <br />
              Adabraka
            </p>
            <p className="tel">Tel:
              <a href="tel:0554791207">0554791207/</a><span><a href="tel:0533695188"> 0533695188</a></span> </p>
          </FooterContent>
          
          <FooterContent>
<<<<<<< HEAD
            <h3>Sunyani Office</h3>
            <p id="address">Adjacent Fidelity Bank, off VRA Road</p>
            <p className="tel">Tel:<a href="tel:0244967595">0244967595</a></p>
          </FooterContent>
          <FooterContent>
            <h3>Follow Us</h3>
            <SocialContainer>
              <a href=""><img src={ Fb } /> <p id="socials">Facebook</p></a>
              <a href=""><img src={ Instagram } /> <p id="socials">Instagram</p> </a>
              <a href=""><img src={ Twitter } /> <p id="socials">Twitter</p></a>
              <p id="emaill"><span>Email:</span> jason@qfstravelandtourgh.com</p>

            </SocialContainer>
          </FooterContent>
=======
          <h3>Follow Us</h3>
          <SocialContainer>
              <a href=""><img src={ Fb } /> <p>facebook</p></a>
              <a href=""><img src={ Instagram } /> <p>instagram</p> </a> 
          <a href=""><img src={Twitter} /> <p>twitter</p></a>
        </SocialContainer>
        </FooterContent>
        </div>
          <p id="email"><span>Email:</span> <a href="mailto:info@qfstravelandtourgh.com">info@qfstravelandtourgh.com</a></p>
          </div>
>>>>>>> 94a5d86e07e378b7230d38cb572f9ecf8252637b
        </FooterInnerCon>
      </FooterContainer>

      <Copy>
        <div id='copy'>
          <p id="copyright">© 2023 QFS Travel and Tours. All Rights Reserved </p>
          <p id="message">Designed with ❤️ by Fleet Labs Ghana</p>
        </div>
        <Privacy>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Cookies Settings</a>
        </Privacy>
      </Copy>
    </FooterCon>
  );
}
