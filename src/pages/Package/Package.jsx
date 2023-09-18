import React from "react";
import { Nav, Packages, Program, Checklist, Destination, Footer } from "../../components";
import { MainPackage } from "./Package.styled";

export default function Package() {
  return (
    <div>
      <Nav/>
    <MainPackage>
    <div className="container">
      <Packages />
      <Program/>
      <Checklist/>
      <Destination/>
    </div>
    </MainPackage>
    <Footer/>
    </div>
  );
}
