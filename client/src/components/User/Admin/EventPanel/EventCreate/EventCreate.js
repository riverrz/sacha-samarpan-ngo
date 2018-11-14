import React, { Component, Fragment } from "react";
import "./EventCreate.css";
import axios from "axios";
import MDSpinner from "react-md-spinner";

class EventCreate extends Component {
  state = {
    date: null,
    timings: "",
    venue: "",
    subject: "",
    description: "",
    imageArr: [],
    error: false,
    success: false,
    message: "",
    loading: false
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
      const { data } = await axios.post("/event", formData, {
        headers: {
          authorization: localStorage.getItem("token"),
          "content-type": "multipart/form-data"
        }
      });
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
        <Fragment>
          <h1>Enter the following fields </h1>
          <form className="eventCreate__form" onSubmit={this.formSubmit}>
            <input
              className="eventCreate__input"
              name="date"
              type="date"
              required
              onChange={event => this.onChangeHandler(event, "date")}
            />
            <input
              className="eventCreate__input"
              name="timings"
              type="text"
              onChange={event => this.onChangeHandler(event, "timings")}
              placeholder="Timings"
            />
            <input
              className="eventCreate__input"
              name="venue"
              type="text"
              required
              onChange={event => this.onChangeHandler(event, "venue")}
              placeholder="Venue"
            />
            <input
              className="eventCreate__input"
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
              className="eventCreate__textArea"
            />
            <input
              className="eventCreate__input"
              name="image"
              type="file"
              required
              multiple
              onChange={this.fileHandler}
            />
            <button className="eventCreate__submitBtn">Submit</button>
          </form>
        </Fragment>
      );
    }
    return <div>{content}</div>;
  }
}

export default EventCreate;
