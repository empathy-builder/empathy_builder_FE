import React, { Component } from "react";
import { Button } from "reactstrap";
import Calculation from "./form2";
import "./form.css";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      transport: "",
      health: "",
      cc: "",
      groceries: "",
      carIn: "",
      pLoan: "",
      pOther: "",
      miscOne: ""
      // house: "",
      // util: "",
      // storage: "",
      // rental: "",
      // security: "",
      // misc2: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sum = () => {
    this.setState({
      result: eval(
        `${this.state.transport} + ${this.state.health} + ${
          this.state.health
        } + ${this.state.cc} + ${this.state.groceries} + ${
          this.state.carIn
        } + ${this.state.pLoan} + ${this.state.pOther} + ${this.state.miscOne}`
      )
    });
  };

  clear = () => {
    this.setState({
      result: ""
    });
  };

  // + ${
  //   this.state.house
  //   } + ${this.state.util} + ${this.state.storage} + ${
  //   this.state.rental
  //   } + ${this.state.security} + ${this.state.misc2}

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
              value={this.state.transport}
              name="transport"
            />
            Health Care:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.health}
              name="health"
            />
            Child Care:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.cc}
              name="cc"
            />
            Groceries:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.groceries}
              name="groceries"
            />
            Car Loans/Insurance:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.carIn}
              name="carIn"
            />
            Personal Loans:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.pLoan}
              name="pLoan"
            />
            Personal Other:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.pOther}
              name="pOther"
            />
            Miscellaneous:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.miscOne}
              name="miscOne"
            />
          </form>
          {/* <div className="totalGroup">
            <h3>Calculate Monthly Relocation Cost</h3>
            <form className="mainForm">
              Total Hotel Cost/Home Rental Fee:{" "}
              <input
                className="forms"
                onChange={this.handleInputChange}
                placeholder="Expense"
                value={this.state.house}
                name="house"
              />
              Utility Conection Fees:{" "}
              <input
                className="forms"
                onChange={this.handleInputChange}
                placeholder="Expense"
                value={this.state.util}
                name="util"
              />
              Storage Unit:{" "}
              <input
                className="forms"
                onChange={this.handleInputChange}
                placeholder="Expense"
                value={this.state.storage}
                name="storage"
              />
              Car Rental/Moving Services/Gas:{" "}
              <input
                className="forms"
                onChange={this.handleInputChange}
                placeholder="Expense"
                value={this.state.rental}
                name="rental"
              />
              Security Measures:{" "}
              <input
                className="forms"
                onChange={this.handleInputChange}
                placeholder="Expense"
                value={this.state.security}
                name="security"
              />
              Miscellaneous:{" "}
              <input
                className="forms"
                onChange={this.handleInputChange}
                placeholder="Expense"
                value={this.state.misc2}
                name="misc2"
              />
            </form> */}
          <Button
            color="info"
            onClick={this.sum}
            type="submit"
            className="button"
          >
            Calculate
          </Button>{" "}
          <Button
            color="info"
            onClick={this.clear}
            type="submit"
            className="button"
          >
            Clear
          </Button>
          <Calculation result={this.state.result} />
        </div>
        {/* </div> */}
      </div>
    );
  }
}
