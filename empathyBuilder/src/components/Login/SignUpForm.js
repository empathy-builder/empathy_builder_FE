import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import MCarousel from "../../components/calcform/carousel/carousel";
import { withRouter } from 'react-router-dom'

import { register } from "../../actions";

import "./signup.css";

// import { signup } from "../../actions/signup";

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
        .then(() => {
            this.props.history.push('/login')
    })
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
          />
          <Button onClick={this.submitHandler} color="info">
            Sign Up
          </Button>
        </form>
        <MCarousel />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  registering: state.registering,
  registered: state.registered
})

export default connect(
  mapStateToProps,
  { register }
) (withRouter(SignUpForm))
