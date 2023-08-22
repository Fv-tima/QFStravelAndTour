import React from 'react'
import { FooterContainer, FooterContent, SocialContainer, FooterLogo } from './Footer.styled'
import Logo from "../../assets/images/F logo.png"
import Instagram from "../../assets/svg/instagram.svg"
import Linkedin from "../../assets/svg/linkedin.svg"
import Fb from "../../assets/svg/fb.svg"
import Twitter from "../../assets/svg/twitter.svg"
export default function Footer() {
  return (
    <FooterContainer>
        <FooterContent>
          <FooterLogo>
          <img src={Logo}/>
          </FooterLogo>
<p>ipsum lorem <br />
details as discuss here</p>
<p>© 2023 QFS Travel & Tours. All Rights Reserved </p>
        </FooterContent>
        <FooterContent>
            <h3>Office</h3>
            <p>Jln.Galau terus no 23. <br />
Jakarta selatan</p>
<h3>Follow us</h3>
<SocialContainer>
    <img src={Instagram}/>
    <img src={Linkedin}/>
    <img src={Fb}/>
    <img src={Twitter}/>
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
  )
}
