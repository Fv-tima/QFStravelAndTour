import React from "react";
import { Nav, Packages, Program, Checklist, Destination } from "../../components";

export default function Package() {
  return (
    <div className="container">
      <Nav />
      <Packages />
      <Program/>
      <Checklist/>
      <Destination/>
    </div>
  );
}
