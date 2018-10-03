import React, { Component } from "react";
import "./Register.css";
import WhiteContainer from "../../../containers/WhiteContainer/WhiteContainer";
import Inputfield from "../../Inputfield/Inputfield";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import MDSpinner from "react-md-spinner";

class Register extends Component {
  state = {
    email: null,
    password: null,
    typeOfUser: null,
    typeId: null
  };
  onChangeHandler = (event, inputType) => {
    this.setState({
      [inputType]: event.target.value
    });
  };
  onSubmitHandler = event => {
    event.stopPropagation();
    event.preventDefault();
    this.props.onSubmit();
  };
  componentDidUpdate() {
    if (this.props.isAuth) {
      this.props.history.replace("/dashboard");
    }
  }
  render() {
    let form = (
      <form onSubmit={this.onSubmitHandler}>
        <Inputfield
          name="user[email]"
          placeholder="Email"
          type="email"
          onChange={event => this.onChangeHandler(event, "email")}
        />
        <Inputfield
          name="user[password]"
          placeholder="Password"
          type="password"
          onChange={event => this.onChangeHandler(event, "password")}
        />
        <select
          name="user[typeOfUser]"
          id="typeOfUser"
          onChange={event => this.onChangeHandler(event, "typeOfUser")}
          required
        >
          <option value="" disabled selected hidden>
            Select user type
          </option>
          <option value="Member">Member</option>
          <option value="Intern">Intern</option>
        </select>
        <Inputfield
          name="user[typeId]"
          placeholder="Member/Intern id"
          type="text"
          onChange={event => this.onChangeHandler(event, "typeId")}
        />
        <button>Submit</button>
      </form>
    );
    if (this.props.loading) {
      form = <MDSpinner size="45" />;
    }
    return (
      <WhiteContainer style={{ height: "40vh" }}>
        <h1>Enter your details </h1>
        <div className="register__error__container">{this.props.error}</div>
        {form}
      </WhiteContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    isAuth: state.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: userDetails => dispatch(actions.registerUser(userDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
