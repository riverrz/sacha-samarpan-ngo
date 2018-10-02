import React, { Component } from "react";
import "./Dashboard.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.onFetchUser();
    }
  }
  render() {
    let content = <p>Loading...</p>;
    if (!this.props.isAuth) {
      content = (
        // <div className="container--authFailed">Please Log in first</div>
        <Redirect to="/login" />
      );
    }
    if (this.props.user) {
      content = (
        <WhiteContainer style={{ height: "60vh" }}>
          Welcome to Dashboard
          <p>Your name: {this.props.user.name}</p>
        </WhiteContainer>
      );
    }
    return content;
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: () => dispatch(actions.fetchUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
