import React, { Component } from "react";
import "./Dashboard.css";
import withAuth from "../withAuth/withAuth";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

class Dashboard extends Component {
  render() {
    return (
      <WhiteContainer style={{ height: "60vh" }}>
        Welcome to Dashboard
        <p>Your name: {this.props.user.name}</p>
      </WhiteContainer>
    );
  }
}

export default withAuth(Dashboard, "/login");
