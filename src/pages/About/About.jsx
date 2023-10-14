import React from "react";
import Abouthead from "../../components/About/About";
import AboutBody from "../../components/AboutBody/AboutBody";
import { MainAbout } from './About.styled'
import { Nav, Footer } from "../../components";
export default function About() {
  return (
    <div className="about">
      <Nav/>
        <MainAbout>
          <Abouthead />
          <AboutBody />
        </MainAbout>
      <Footer/>
    </div>
  );
}
