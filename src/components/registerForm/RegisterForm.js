import React from "react";
import { Link } from "react-router-dom";

import { withAsyncAction } from "../../redux/HOCs";
import LoginForm from "../loginForm/LoginForm";
import "./registerForm.css";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      displayName: "",
      password: "",
      confirmPass: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  usernamehandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  displayhandler = (event) => {
    this.setState({
      displayName: event.target.value,
    });
  };

  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  confirmpasshandler = (event) => {
    this.setState({
      confirmPass: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.displayName} Congratulations, You've registered Successfully !`
    );
    console.log(this.state);
    this.setState({
      username: "",
      displayName: "",
      password: "",
      confirmPass: "",
    });
    event.preventDefault();
  };

  render() {
    const { loading, error } = this.props;

    return (
      <div className="RegisterForm">
        <br />
        <form id="register-form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter Username"
            autoFocus
            required
            onChange={this.usernamehandler}
          />
          <br />
          <label htmlFor="displayName">Display Name </label>
          <input
            id="displayName"
            type="text"
            name="displayName"
            placeholder="Enter Display Name"
            autoFocus
            required
            onChange={this.displayhandler}
          />
          <br />
          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            onChange={this.passwordhandler}
          />
          <br />
          <label htmlFor="confirmPass">Confirm Password </label>
          <input
            id="confirmPass"
            type="password"
            name="confirmPass"
            placeholder="Confirm Password"
            required
            onChange={this.confirmpasshandler}
          />
          <br />
          <button id="reg-btn" className="reg-btn" type="submit">
            Register
          </button>
          <br />
        </form>
      </div>
    );
  }
}

export default RegisterForm;
