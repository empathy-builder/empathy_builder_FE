import React from "react";
import Calculation from "./DataCollectionForm";
import { Button } from "reactstrap";
import "./form.css";

export default class RelocationBudgetForm extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
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
          <Calculation result={this.state.result} />
        </div>
      </div>
    );
  }
}
