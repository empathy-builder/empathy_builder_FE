import React, { Component } from "react";
import "./form.css";

export default class Form2 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="expenseForm">
        <div className="totalGroup">
          <h3>Calculate Monthly Relocation Cost</h3>
          <form className="mainForm">
            Total Hotel Cost/Home Rental Fee:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              //value
              name="price"
            />
            Utility Conection Fees:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              //value
              name="price"
            />
            Storage Unit:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              //value
              name="price"
            />
            Car Rental/Moving Services:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              //value
              name="price"
            />
            Gas:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              //value
              name="price"
            />
            Additional Security Measures:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              //value
              name="price"
            />
            Miscellaneous:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              //value
              name="price"
            />
          </form>
          <button type="submit" className="button">
            Calculate
          </button>
        </div>
      </div>
    );
  }
}
