import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Button } from "reactstrap";
import { connect } from "react-redux";

import addMember from "../../actions/index";

import "./signup.css";

// import { signup } from "../../actions/signup";

export default class SignUp extends React.Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = () => {
    this.props.addMember(this.state);
  };

  // addMember = event => {
  //   event.preventDefault();
  //   const newMember = {
  //     username: this.state.username,
  //     password: this.state.password
  //   };
  //   this.props.addUser(newMember);

  //   this.setState({
  //     username: "",
  //     password: ""
  //   });
  // };

  render() {
    return (
      <div className="signupForm">
        <form onSubmit={this.signup}>
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
            className="formInput"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            className="formInput"
          />
          <Button onClick={this.submitHandler} color="primary">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}
