import React, { Component } from "react";
import Calculation from "./form2";
import Modal from "./modal";
import CalculationTwo from "./form4";

//reactstrap
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

import "./form.css";

export default class Form3 extends React.Component {
  constructor() {
    super();
    this.state = {
      resultTwo: "",
      house: "",
      util: "",
      storage: "",
      rental: "",
      travelTwo: "",
      cPhone: "",
      security: "",
      misc2: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sum = () => {
    this.setState({
      resultTwo: eval(
        `${this.state.house} + ${this.state.util} + ${this.state.storage} + ${
          this.state.rental
        } + ${this.state.cPhone} + ${this.state.travelTwo} + ${
          this.state.security
        } + ${this.state.misc2}`
      )
    });
  };

  clear = () => {
    this.setState({
      resultTwo: ""
    });
  };

  render() {
    return (
      <div className="expenseForm">
        <div className="totalGroup">
          <h3>Calculate Monthly Relocation Cost</h3>
          <form className="mainForm">
            Total Hotel Cost/Rental Deposit:{" "}
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
            Car Rental/Moving Services:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.rental}
              name="rental"
            />
            Travel Costs:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.travelTwo}
              name="travelTwo"
            />
            Cell Phone:{" "}
            <input
              className="forms"
              onChange={this.handleInputChange}
              placeholder="Expense"
              value={this.state.cPhone}
              name="cPhone"
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
          </form>
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
          <CalculationTwo resultTwo={this.state.resultTwo} />
        </div>
      </div>
    );
  }
}
