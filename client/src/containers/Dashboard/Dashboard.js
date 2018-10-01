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

const styles = {
  height: "40vh",
  padding: "5rem 0",
  fontSize: "16px",
  textAlign: "center",
  backgroundColor: "#eee"
};

export default withAuth(Dashboard, "/login", styles);
