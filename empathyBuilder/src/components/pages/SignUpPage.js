import React, { Component } from "react";
import SignUp from "../Login/SignUpForm";

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="signupPage">
        <h1>Please Sign Up</h1>
        <SignUp />
      </div>
    );
  }
}

export default SignUpPage;
