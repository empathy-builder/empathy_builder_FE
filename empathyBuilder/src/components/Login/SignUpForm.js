import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./signup.css";

// import { signup } from "../../actions/signup";

export default class SignUp extends React.Component {
  state = {
    credentials: {
      username: "",
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

  signup = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="signupForm">
        <form onSubmit={this.signup}>
          <input
            placeholder="Name"
            type="text"
            name="username"
            // value={this.state.credentials.username}
            onChange={this.handleChange}
            className="formInput"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            // value={this.state.credentials.password}
            onChange={this.handleChange}
            className="formInput"
          />
          <Button color="primary">
            Sign Up
            {/* {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )} */}
          </Button>
          {/* <Link to="/login">
            <p className="already">Have an account? Login here.</p>
          </Link> */}
        </form>
      </div>
    );
  }
}
