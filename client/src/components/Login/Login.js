import React, { Component } from "react";
import "./Login.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import axios from "axios";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };
  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleSubmit = async event => {
    event.stopPropagation();
    event.preventDefault();
    try {
      const response = await axios.post("/user/login", {
        email: this.state.email,
        password: this.state.password
      });
      localStorage.setItem("token", response.data.token);
      window.location.replace("/dashboard");
    } catch (err) {
      this.setState({
        error: "Incorrect username or password"
      });
    }
  };
  render() {
    return (
      <WhiteContainer style={{ height: "60vh" }}>
        <p>{this.state.error}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            onChange={this.onEmailChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            name="password"
            onChange={this.onPasswordChange}
          />
          <button> Submit </button>
        </form>
      </WhiteContainer>
    );
  }
}

export default Signin;
