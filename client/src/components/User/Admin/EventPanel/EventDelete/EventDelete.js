import React, { Component } from "react";
import "./EventDelete.css";
import axios from "axios";
import MDSpinner from "react-md-spinner";

class EventDelete extends Component {
  state = {
    eventId: "",
    loading: false,
    success: false,
    error: false,
    message: ""
  };
  onChangeHandler = event => {
    this.setState({
      eventId: event.target.id
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    try {
      const { data } = await axios.delete(`/event/${this.state.eventId}`);
      if (data.error) {
        this.setState({
          loading: false,
          error: true,
          message: data.message
        });
      } else {
        this.setState({
          loading: false,
          success: true,
          message: data.message
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
        message: "Error connecting to the server"
      });
    }
  };
  render() {
    let content;
    if (this.state.success) {
      content = <h2 style={{ color: "green" }}>{this.state.message}</h2>;
    } else if (this.state.error) {
      content = <h2 style={{ color: "red" }}>{this.state.message}</h2>;
    } else if (this.state.loading) {
      content = <MDSpinner size="45" />;
    } else {
      content = (
        <form
          onSubmit={event => this.handleSubmit(event)}
          className="eventDelete__form"
        >
          <input
            type="text"
            name="eventId"
            className="eventDelete__input"
            placeholder="Enter Event Id"
            required
            onChange={event => this.onChangeHandler(event)}
          />
          <button className="eventDelete__submitBtn">Submit</button>
        </form>
      );
    }
    return content;
  }
}

export default EventDelete;
