import React from "react";
import { Header } from "../About/About.styled";
import Rectangle2 from "../../assets/images/Rectangle2.png";
import Rectangle3 from "../../assets/images/Rectangle3.jpeg";

export default function Abouthead () {
  return (
      <Header>
        <img id="one" src={ Rectangle2 } />
        <img id="two"  src={ Rectangle3 } />
      </Header>
  )
}