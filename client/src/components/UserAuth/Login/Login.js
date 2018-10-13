import React, { Component } from "react";
import "./Login.css";
import WhiteContainer from "../../../containers/WhiteContainer/WhiteContainer";
import { connect } from "react-redux";
import MDSpinner from "react-md-spinner";
import Inputfield from "../../Inputfield/Inputfield";
import * as actions from "../../../store/AuthReducer/actions";

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
    let form = (
      <form onSubmit={this.handleSubmit} className="login__form">
        <Inputfield
          name="email"
          type="email"
          placeholder="Email"
          onChange={this.onEmailChange}
        />
        <Inputfield
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.onPasswordChange}
        />
        <button className="login__submit"> Login </button>
      </form>
    );
    if (this.props.loading) {
      form = <MDSpinner size="45" />;
    }
    return (
      <WhiteContainer style={{ height: "60vh" }}>
        <h1 className="login__heading--primary">Enter your details:</h1>
        <div className="login__error__container">{this.props.error}</div>
        {form}
      </WhiteContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    error: state.auth.error,
    loading: state.auth.loading
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
