import React, { Component } from "react";

import { Button } from "reactstrap";

import "./signup.css";

export default class LoginForm extends React.Component {
  handleChange = e => {
    this.setState({
      credentials: {
        name: "",
        password: ""
      }
    });
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials);
  };

  render() {
    return (
      <div className="loginForm">
        <form onSubmit={this.login}>
          <input
            placeholder="Name"
            type="text"
            name="username"
            // value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            // value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <Button color="primary">
            Login
            {/* {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )} */}
          </Button>
        </form>
      </div>
    );
  }
}
