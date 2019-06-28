import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import MCarousel from "../carousel/carousel";
import { withRouter } from 'react-router-dom'

import { register } from "../../actions";

import "./signup.css";

class SignUpForm extends React.Component {
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

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state.credentials)
    this.props.register(this.state.credentials)
  };

  render() {
    console.log(this.props.registered)
    return (
      <div className="signupForm">
        {this.props.registered && this.props.history.push('/restricted')}
        <form onSubmit={this.signup}>
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
            className="formInput"
          />{" "}
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            className="formInput"
          />{" "}
          <Button onClick={this.submitHandler} color="info">
            {this.props.registering ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
        <p style={{height: "5vh"}}>{this.props.error && this.props.error === '23505' ? "Username is taken. Try logging in"  : "Unable to register. Please try again."}</p>
        <MCarousel />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  registering: state.registering,
  registered: state.registered,
  error: state.error
})

export default connect(
  mapStateToProps,
  { register }
) (withRouter(SignUpForm))
