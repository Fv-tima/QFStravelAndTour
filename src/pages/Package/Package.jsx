import React from "react";
import { Packages, Program, Checklist, Destination } from "../../components";

export default function Package() {
  return (
    <div className="container">
      <Packages />
      <Program/>
      <Checklist/>
      <Destination/>
    </div>
  );
}
