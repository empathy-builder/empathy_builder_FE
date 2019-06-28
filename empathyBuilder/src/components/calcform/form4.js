import React, { Component } from "react";
import "./form.css";

export default class CalculationTwo extends Component {
  render() {
    let { resultTwo } = this.props;
    return (
      <div className="result">
        <h2>Total {`$` + resultTwo}</h2>
      </div>
    );
  }
}
