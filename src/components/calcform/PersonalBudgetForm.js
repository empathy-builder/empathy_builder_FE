import React from "react";
import { Button } from "reactstrap";
import Calculation from "./DataCollectionForm";
import "./form.css";

export default class PersonalBudgetForm extends React.Component {
  constructor() {
    super()
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
    }
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
