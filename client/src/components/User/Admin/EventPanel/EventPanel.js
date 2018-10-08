import React, { Component } from "react";
import "./EventPanel.css";
import axios from "axios";

class EventPanel extends Component {
  state = {
    date: null,
    timings: "",
    venue: "",
    subject: "",
    description: "",
    image: null
  };
  onChangeHandler = (event, field) => {
    this.setState({
      [field]: event.target.value
    });
  };
  fileHandler = event => {
    this.setState({
      image: event.target.files[0]
    });
  };
  formSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", this.state.image);
    formData.append("date", this.state.date);
    formData.append("venue", this.state.venue);
    formData.append("subject", this.state.subject);
    formData.append("description", this.state.description);
    formData.append("timings", this.state.timings);
    const { data } = await axios.post("/events", formData, {
      headers: {
        authorization: localStorage.getItem("token"),
        "content-type": "multipart/form-data"
      }
    });
  };
  render() {
    return (
      <div>
        <h1>Enter the following fields </h1>
        <form className="eventPanel__form" onSubmit={this.formSubmit}>
          <input
            className="eventPanel__input"
            name="date"
            type="date"
            required
            onChange={event => this.onChangeHandler(event, "date")}
          />
          <input
            className="eventPanel__input"
            name="timings"
            type="text"
            required
            onChange={event => this.onChangeHandler(event, "timings")}
            placeholder="Timings"
          />
          <input
            className="eventPanel__input"
            name="venue"
            type="text"
            required
            onChange={event => this.onChangeHandler(event, "venue")}
            placeholder="Venue"
          />
          <input
            className="eventPanel__input"
            name="subject"
            type="text"
            required
            onChange={event => this.onChangeHandler(event, "subject")}
            placeholder="Subject"
          />
          <textarea
            name="description"
            type="text"
            required
            onChange={event => this.onChangeHandler(event, "description")}
            className="eventPanel__textArea"
          />
          <input
            className="eventPanel__input"
            name="image"
            type="file"
            required
            onChange={this.fileHandler}
          />
          <button className="eventPanel__submitBtn">Submit</button>
        </form>
      </div>
    );
  }
}

export default EventPanel;
