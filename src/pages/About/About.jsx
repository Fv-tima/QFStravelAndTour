import React from "react";
import Abouthead from "../../components/About/About";
import AboutBody from "../../components/AboutBody/AboutBody";
import { Nav, Footer } from "../../components";
export default function About() {
  return (
    <div>
      <Nav/>
      <div>
        <Abouthead />
      </div>
      <AboutBody />
      <Footer/>
    </div>
  );
}
