import React, { Component } from "react";
import "./Dashboard.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import { connect } from "react-redux";
import * as actions from "../../store/AuthReducer/actions";
import { Redirect } from "react-router-dom";
import MDSpinner from "react-md-spinner";
import NormalUser from "../../components/User/NormalUser/NormalUser";
import Admin from "../../components/User/Admin/Admin";

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
      content = <Redirect to="/user/login" />;
    } else if (this.props.user && this.props.user.isAdmin) {
      content = (
        <WhiteContainer style={{ minHeight: "60vh" }}>
          <Admin {...this.props} />
        </WhiteContainer>
      );
    } else if (this.props.user && !this.props.user.isAdmin) {
      content = (
        <WhiteContainer style={{ minHeight: "60vh" }}>
          <NormalUser {...this.props} />
        </WhiteContainer>
      );
    }
    return content;
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    user: state.auth.user
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
