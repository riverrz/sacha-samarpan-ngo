import React, { Component, Fragment } from "react";
import "./EventEdit.css";
import axios from "axios";
import MDSpinner from "react-md-spinner";

class EventEdit extends Component {
  state = {
    date: null,
    timings: "",
    venue: "",
    subject: "",
    description: "",
    imageArr: null,
    error: false,
    success: false,
    message: "",
    loading: false,
    eventId: "",
    notFound: false
  };
  onChangeHandler = (event, field) => {
    this.setState({
      [field]: event.target.value
    });
  };
  fileHandler = event => {
    const imageArr = Object.keys(event.target.files).map(key => {
      return event.target.files[key];
    });
    this.setState({
      imageArr
    });
  };
  formSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    this.state.imageArr.forEach(img => {
      formData.append("image", img);
    });
    formData.append("date", this.state.date);
    formData.append("venue", this.state.venue);
    formData.append("subject", this.state.subject);
    formData.append("description", this.state.description);
    formData.append("timings", this.state.timings);
    try {
      this.setState({
        loading: true
      });
      const { data } = await axios.patch(
        `/event/${this.state.eventId}`,
        formData,
        {
          headers: {
            authorization: localStorage.getItem("token"),
            "content-type": "multipart/form-data"
          }
        }
      );
      if (data.status === "Error") {
        this.setState(
          {
            error: true,
            message: data.message,
            loading: false
          },
          () => this.resetHandler()
        );
      } else if (data.status === "Success") {
        this.setState(
          {
            success: true,
            message: data.message,
            loading: false
          },
          () => this.resetHandler()
        );
      }
    } catch (err) {
      this.setState(
        {
          error: true,
          message: "Error in connecting with server"
        },
        () => this.resetHandler()
      );
    }
  };
  resetHandler() {
    setTimeout(() => {
      this.setState({
        date: null,
        timings: "",
        venue: "",
        subject: "",
        description: "",
        image: [],
        error: false,
        success: false,
        message: "",
        loading: false
      });
    }, 1000);
  }
  getEventFromId = async event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    try {
      const { data } = await axios.get(`/fetch/event/${this.state.eventId}`);
      if (data.error) {
        this.setState({
          loading: false,
          notFound: true
        });
      } else {
        this.setState({
          loading: false,
          error: false,
          date: new Date(data.date).toISOString().substr(0, 10),
          timings: data.timings,
          description: data.description,
          subject: data.subject,
          venue: data.venue
        });
      }
    } catch (err) {
      this.setState({
        loading: false,
        error: true,
        message: "Error in connecting with server"
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
    } else if (!this.state.subject) {
      let notFound;
      if (this.state.notFound) {
        notFound = (
          <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
            No event found
          </h2>
        );
      }
      content = (
        <Fragment>
          {notFound}
          <form
            onSubmit={this.getEventFromId}
            className="eventEdit__form eventEdit__form--small"
          >
            <input
              type="text"
              name="eventId"
              placeholder="Enter an event's id"
              required
              className="eventEdit__input"
              onChange={event => this.onChangeHandler(event, "eventId")}
            />
            <button className="eventEdit__submitBtn">Submit</button>
          </form>
        </Fragment>
      );
    } else {
      content = (
        <Fragment>
          <h1>Update the following fields </h1>
          <form className="eventEdit__form" onSubmit={this.formSubmit}>
            <input
              className="eventEdit__input"
              name="date"
              type="date"
              required
              value={this.state.date}
              onChange={event => this.onChangeHandler(event, "date")}
            />
            <input
              className="eventEdit__input"
              name="timings"
              type="text"
              value={this.state.timings}
              onChange={event => this.onChangeHandler(event, "timings")}
              placeholder="Timings"
            />
            <input
              className="eventEdit__input"
              name="venue"
              type="text"
              required
              value={this.state.venue}
              onChange={event => this.onChangeHandler(event, "venue")}
              placeholder="Venue"
            />
            <input
              className="eventEdit__input"
              name="subject"
              type="text"
              required
              value={this.state.subject}
              onChange={event => this.onChangeHandler(event, "subject")}
              placeholder="Subject"
            />
            <textarea
              name="description"
              type="text"
              required
              value={this.state.description}
              onChange={event => this.onChangeHandler(event, "description")}
              className="eventEdit__textArea"
            />
            <input
              className="eventEdit__input"
              name="image"
              type="file"
              multiple
              onChange={this.fileHandler}
            />
            <button className="eventEdit__submitBtn">Submit</button>
          </form>
        </Fragment>
      );
    }
    return <div>{content}</div>;
  }
}

export default EventEdit;
