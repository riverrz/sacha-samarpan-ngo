import React, { Component } from "react";
import WhiteContainer from "../../../containers/WhiteContainer/WhiteContainer";
import Event from "./Event/Event";
import "./EventUpcoming.css";
import MDSpinner from "react-md-spinner";
import axios from "axios";
import Error from "../../Error/Error";

class EventUpcoming extends Component {
  state = {
    events: null,
    error: false
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get("/fetch/event/upcoming");
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
      content = <h2 style={{ textAlign: "center" }}>No event found</h2>;
    } else if (this.state.events.length !== 0) {
      content = this.state.events.map((event, id) => {
        console.log(event);
        return (
          <Event
            date={new Date(event.date).toDateString()}
            venue={event.venue}
            timings={event.timings}
            subject={event.subject}
            key={id}
          />
        );
      });
    }
    if (this.state.error) {
      content = <Error />;
    }

    return (
      <WhiteContainer style={{ minHeight: "60vh" }}>
        <h1 className="eventUpcoming__heading--primary">Our Upcoming Events</h1>
        <div className="eventUpcoming__container">{content}</div>
      </WhiteContainer>
    );
  }
}

export default EventUpcoming;
