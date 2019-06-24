import React, { Component } from "react";
import "./form.css";

export default class Form extends React.Component {
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
        <form>
          <input
            className="forms"
            onChange={this.handleInputChange}
            placeholder="Transportation"
            //value
            name="price"
          />
          <input
            className="forms"
            onChange={this.handleInputChange}
            placeholder="Insurances"
            //value
            name="price"
          />
          <input
            className="forms"
            onChange={this.handleInputChange}
            placeholder="Transportation"
            //value
            name="price"
          />
          <input
            className="forms"
            onChange={this.handleInputChange}
            placeholder="Transportation"
            //value
            name="price"
          />
          <input
            className="forms"
            onChange={this.handleInputChange}
            placeholder="Transportation"
            //value
            name="price"
          />
          <input
            className="forms"
            onChange={this.handleInputChange}
            placeholder="Transportation"
            //value
            name="price"
          />
        </form>
      </div>
    );
  }
}
