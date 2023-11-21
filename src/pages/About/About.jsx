import React from "react";
import AboutHead from "../../components/AboutHead/AboutHead";
import AboutBody from "../../components/AboutBody/AboutBody";
import { MainAbout } from './About.styled'
import { Nav, Footer, Cert } from "../../components";

export default function About() {
  return (
    <div className="about">
      <Nav/>
        <MainAbout>
          <AboutHead />
          <AboutBody />
          <Cert />
        </MainAbout>
      <Footer/>
    </div>
  );
}
