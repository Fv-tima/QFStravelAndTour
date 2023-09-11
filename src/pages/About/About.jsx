import React from "react";
import Abouthead from "../../components/About/About";
import AboutBody from "../../components/AboutBody/AboutBody";
import { Nav } from "../../components";
export default function About() {
  return (
    <div>
      <div className="container">
        <Nav />
      </div>
      <div>
        <Abouthead />
      </div>
      <AboutBody />
    </div>
  );
}
