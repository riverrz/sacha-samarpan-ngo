import React, { Component } from "react";
import WhiteContainer from "../../../containers/WhiteContainer/WhiteContainer";
import EventArch from "./EventArch/EventArch";
import "./EventArchive.css";
import MDSpinner from "react-md-spinner";
import axios from "axios";
import Error from "../../Error/Error";

class EventArchive extends Component {
  state = {
    events: null,
    error: false
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get("/events/fetch/archive");
      this.setState({
        events: data
      });
    } catch (err) {
      this.setState({
        error: true
      });
    }
  }
  render() {
    let content;
    if (!this.state.events) {
      content = <MDSpinner size="45" />;
    } else if (this.state.events.length === 0) {
      content = <h2>No event found</h2>;
    } else if (this.state.events.length !== 0) {
      let events = this.state.events.map((event, i) => {
        return (
          <EventArch
            key={i}
            photo={event.photo}
            title={event.title}
            postedOn={event.postedOn}
          />
        );
      });
      content = <div className="eventArchive__container">{events}</div>;
    }
    if (this.state.error) {
      content = <Error />;
    }
    return (
      <WhiteContainer style={{ minHeight: "60vh" }}>
        <h1 className="eventArchive__heading--primary">
          Event Archives <i className="fas fa-archive" />
        </h1>
        {content}
      </WhiteContainer>
    );
  }
}

export default EventArchive;
