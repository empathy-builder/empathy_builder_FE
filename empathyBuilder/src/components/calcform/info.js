import React from "react";
import calculator from "./calculator.png";

import "./info.css";

export default function Info() {
  return (
    <div className="infoSection">
      <img
        className="calculatorImage"
        src={calculator}
        style={calculator.png}
        alt="whatever"
      />
      <h1>Personal Budgeting</h1>
      <p>
        When it comes to sudden relocation during a hectic time, finance
        planning takes a backseat. This can cause more uneeded headaches to pile
        up.
      </p>{" "}
      <p>
        Calculate your expenses before taking that next step in order to fully
        prepare yourself for the future.
      </p>
    </div>
  );
}
