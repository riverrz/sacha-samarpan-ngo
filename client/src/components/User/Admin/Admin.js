import React, { Component } from "react";
import "./Admin.css";
import EventCreate from "./EventPanel/EventCreate/EventCreate";
import EventEdit from "./EventPanel/EventEdit/EventEdit";
import EventDelete from "./EventPanel/EventDelete/EventDelete";
import { withRouter } from "react-router-dom";

class Admin extends Component {
  state = {
    panel: ""
  };
  eventHandler = panel => {
    this.setState({
      panel
    });
  };
  render() {
    let panel = null;
    if (this.state.panel === "EventCreate") {
      panel = <EventCreate />;
    } else if (this.state.panel === "EventEdit") {
      panel = <EventEdit />;
    } else if (this.state.panel === "EventDelete") {
      panel = <EventDelete />;
    }
    return (
      <div className="admin__container">
        <h3>Welcome Admin</h3>
        <div className="admin__switch__container">
          <button
            className="admin__switch"
            onClick={() => this.eventHandler("EventCreate")}
          >
            Add an event
          </button>
          <button
            className="admin__switch"
            onClick={() => this.eventHandler("EventEdit")}
          >
            Edit an event
          </button>
          <button
            className="admin__switch"
            onClick={() => this.eventHandler("EventDelete")}
          >
            Delete an event
          </button>
        </div>
        {panel}
      </div>
    );
  }
}

export default withRouter(Admin);
