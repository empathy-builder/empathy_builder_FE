import React, { Component } from "react";
import "./form.css";

export default class Calculation extends Component {
  render() {
    let { resultOne } = this.props;
    return (
      <div className="result">
        <h2>Total {`$` + resultOne}</h2>
      </div>
    );
  }
}
