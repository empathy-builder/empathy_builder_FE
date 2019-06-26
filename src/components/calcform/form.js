import React, { Component } from "react";
import { Button } from "reactstrap";
import Calculation from "./form2";
import "./form.css";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      transportation: "",
      healthInsurance: "",
      carInsurance: ""
    };
  }

  onClick = button => {
    if (button === "button") {
      this.calculate();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="expenseForm">
        <div className="totalGroup">
          <h3>Calculate Personal Monthly Budget</h3>
          <form className="mainForm">
            Transportation:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              // value={this.state.transporatation}
              name="price"
            />
            Health Insurance:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              // value={this.state.healthInsurance}
              name="price"
            />
            Car Insurance:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.carInsurance}
              name="price"
            />
            Main Loans:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              //value
              name="price"
            />
            Personal Loans:{" "}
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
            <Button type="submit" className="button" color="info">
              Calculate
            </Button>
            <button type="onClick" />
            <Calculation result={this.state.result} />
          </div>
        </div>
      </div>
    );
  }
}
