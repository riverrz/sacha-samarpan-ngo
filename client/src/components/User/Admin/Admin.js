import React, { Component } from "react";
import "./Admin.css";
import EventPanel from "./EventPanel/EventPanel";
import { withRouter } from "react-router-dom";

class Admin extends Component {
  state = {
    panel: "",
    result: ""
  };
  eventHandler = () => {
    this.setState({
      panel: "Event"
    });
  };
  render() {
    var searchParams = new URLSearchParams(this.props.location.search);
    let panel = null;
    if (searchParams.has("result")) {
      panel = (
        <p className="admin__actionResult">{searchParams.get("result")}</p>
      );
    }
    if (this.state.panel === "Event") {
      panel = <EventPanel />;
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
