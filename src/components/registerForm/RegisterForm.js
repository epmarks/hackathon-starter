import React from "react";
import { Link, ReactRouter } from "react-router-dom";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import LoginForm from "../loginForm/LoginForm";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.sate = {
      username: "",
      displayName: "",
      password: "",
      confirmPass: "",
    };
  }
  //   handleRegister = (e) => {
  //     e.preventDefault();
  //     this.props.register(this.state);
  //   };

  handleRegisterChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <div className="RegisterForm">
        <form id="register-form" onSubmit={this.handleRegister}>
          <label htmlFor="username">Username </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter Username"
            autoFocus
            required
            onChange={this.handleRegisterChange}
          />
          <label htmlFor="displayName">Display name </label>
          <input
            id="displayName"
            type="text"
            name="displayName"
            placeholder="Enter display name"
            autoFocus
            required
            onChange={this.handleRegisterChange}
          />

          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            onChange={this.handleRegisterChange}
          />

          <label htmlFor="confirmPass">Confirm Password </label>
          <input
            id="confirmPass"
            type="password"
            name="confirmPass"
            placeholder="Confirm password"
            required
            onChange={this.handleRegisterChange}
          />

          <button className="reg-btn" type="submit">
            Register
          </button>
          <span>
            Already have an account? Login{" "}
            <a href="../loginForm/LoginForm.js">here</a>
          </span>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
