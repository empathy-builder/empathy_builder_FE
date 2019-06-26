import React, { Component } from "react";
import "./form.css";

export default class Calculation extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="result">
        Total:
        <p>{result}</p>
        ^^^
      </div>
    );
  }
}
