import React from "react";
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
  handleRegister = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  };

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
            type="text"
            name="username"
            placeholder="Enter Username"
            autoFocus
            required
            onChange={this.handleRegisterChange}
          />
          <label htmlFor="displayName">Display name </label>
          <input
            type="text"
            name="displayName"
            placeholder="Enter display name"
            autoFocus
            required
            onChange={this.handleRegisterChange}
          />

          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            onChange={this.handleRegisterChange}
          />

          <label htmlFor="confirmPass">Confirm Password </label>
          <input
            type="password"
            name="confirmPass"
            placeholder="Confirm password"
            required
            onChange={this.handleRegisterChange}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default withAsyncAction("auth", "register")(RegisterForm);
