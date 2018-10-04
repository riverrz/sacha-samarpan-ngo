import React, { Component } from "react";
import "./NormalUser.css";

class User extends Component {
  render() {
    return (
      <div className="normalUser__container">
        Your name is: {this.props.user.name}
      </div>
    );
  }
}

export default User;
