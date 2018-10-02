import React, { Component } from "react";
import "./Login.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class Signin extends Component {
  state = {
    email: "",
    password: ""
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
    this.props.onLogin({
      email: this.state.email,
      password: this.state.password
    });
  };
  componentDidUpdate() {
    if (this.props.isAuth) {
      this.props.history.replace("/dashboard");
    }
  }
  render() {
    return (
      <WhiteContainer style={{ height: "60vh" }}>
        <p>{this.props.loading}</p>
        <p>{this.props.error}</p>
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

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth,
    error: state.error,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: userDetails => dispatch(actions.loginUser(userDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
