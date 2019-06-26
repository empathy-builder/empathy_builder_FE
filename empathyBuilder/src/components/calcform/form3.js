import React, { Component } from "react";
import Calculation from "./form2";

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
      result: "",
      house: "",
      util: "",
      storage: "",
      rental: "",
      security: "",
      misc2: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sum = () => {
    this.setState({
      result: eval(
        `${this.state.house} + ${this.state.util} + ${this.state.storage} + ${
          this.state.rental
        } + ${this.state.security} + ${this.state.misc2}`
      )
    });
  };

  clear = () => {
    this.setState({
      result: ""
    });
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
          <Calculation result={this.state.result} />
        </div>
      </div>
    );
  }
}
