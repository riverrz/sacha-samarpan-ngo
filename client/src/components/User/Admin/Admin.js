import React, { Component } from "react";
import "./Admin.css";
import EventCreate from "./EventPanel/EventCreate/EventCreate";
import { withRouter } from "react-router-dom";

class Admin extends Component {
  state = {
    panel: ""
  };
  eventHandler = () => {
    this.setState({
      panel: "Event"
    });
  };
  render() {
    let panel = null;
    if (this.state.panel === "Event") {
      panel = <EventCreate />;
    }
    return (
      <div className="admin__container">
        <h3>Welcome Admin</h3>
        <div className="admin__switch__container">
          <button className="admin__switch" onClick={this.eventHandler}>
            Add an event
          </button>
          <button className="admin__switch" onClick={this.eventHandler}>
            Add an event
          </button>
          <button className="admin__switch" onClick={this.eventHandler}>
            Add an event
          </button>
        </div>
        {panel}
      </div>
    );
  }
}

export default withRouter(Admin);
