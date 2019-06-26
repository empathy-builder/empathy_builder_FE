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
      <h1> Information Title</h1>
      <p>
        Paragraph of information lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </p>
    </div>
  );
}
