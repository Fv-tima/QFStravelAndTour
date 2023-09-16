import React from "react";
import { Packages, Program, Checklist, Destination } from "../../components";
import { MainPackage } from "./Package.styled";

export default function Package() {
  return (
    <MainPackage>
    <div className="container">
      <Packages />
      <Program/>
      <Checklist/>
      <Destination/>
    </div>
    </MainPackage>
  );
}
