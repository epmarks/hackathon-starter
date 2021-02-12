import React, { Component } from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import RegisterForm from "../registerForm/RegisterForm";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            onChange={this.handleChange}
          />
          <br />
          <button type="submit" disabled={loading}>
            Login
          </button>

          <p>New to Kwitter? Register Now!</p>
          {/* <Link to="registerForm/RegisterForm"> */}
          <button
            type="submit"
            onClick="registerForm/RegisterForm"
            disabled={loading}
          >
            Register
          </button>
          {/* </Link> */}
        </form>

        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
