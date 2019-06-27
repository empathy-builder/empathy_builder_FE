import React, { Component } from "react";
import { connect } from 'react-redux'
import { login } from '../../actions'
import { withRouter } from 'react-router-dom'
import { Button } from "reactstrap";
import MCarousel from "../../components/calcform/carousel/carousel";
import "./signup.css";

class LoginForm extends React.Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  }
  handleChange = e => {
    this.setState({
      credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
      }
  })
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials);
  };

  render() {
    return (
      <div className="loginForm">
        {this.props.loggedIn && this.props.history.push('/restricted')}
        <form onSubmit={this.login}>
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          />{" "}
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />{" "}
          <Button color="info">
          {this.props.loggingIn ? 
                                this.props.error ? 
                                    'Login' : 'Logging In....' 
                             : 
                                'Log In'
                        }
          </Button>
        </form>
        <p style={{height: '5vh'}}>{this.props.error && this.props.error}</p>
        <MCarousel />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
  loggedIn: state.loggedIn,
  error: state.error
})

export default connect(
  mapStateToProps,
  { login }
) (withRouter(LoginForm))