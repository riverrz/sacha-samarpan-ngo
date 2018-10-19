import React, { Component } from "react";
import WhiteContainer from "../../../containers/WhiteContainer/WhiteContainer";
import "./EventOverview.css";
import Error from "../../Error/Error";
import MDSpinner from "react-md-spinner";
import axios from "axios";

class EventOverview extends Component {
  state = {
    events: null,
    error: false
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get("/fetch/event/overview");
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
      content = this.state.events.map((event, i) => {
        return (
          <li className="EventOverview__listItem" key={i}>
            {event.subject}
          </li>
        );
      });
    }
    if (this.state.error) {
      content = <Error />;
    }

    return (
      <WhiteContainer style={{ minHeight: "60vh" }}>
        <div className="EventOverview__header">
          <h1 className="EventOverview__heading--primary">
            An overview of our events
          </h1>
          <hr className="EventOverview__horizontal" />
        </div>
        <div className="EventOverview__container">
          <p>
            Under Saccha Samarpan we deliver following workshops for teachers,
            parents and support staff which cover Academic, Psychological and
            Legal aspects of child abuse, child rights, and gender equality.
          </p>
          <ul className="EventOverview__list">{content}</ul>
        </div>
      </WhiteContainer>
    );
  }
}

export default EventOverview;
