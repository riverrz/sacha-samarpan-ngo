import React, { Component } from "react";
import "./Dashboard.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Redirect } from "react-router-dom";
import MDSpinner from "react-md-spinner";

class Dashboard extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.onFetchUser();
    }
  }
  render() {
    let content = (
      <div className="container--authFailed">
        <MDSpinner size="45" />
      </div>
    );
    if (!this.props.isAuth) {
      content = <Redirect to="/login" />;
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
