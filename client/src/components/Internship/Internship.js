import React, { Component } from "react";
import classes from "./Internship.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import Inputfield from "../../components/Inputfield/Inputfield";

class Internship extends Component {
  state = {
    type: "",
    visible: false
  };
  changeTypeHandler = event => {
    this.setState({
      type: event.target.value,
      visible: true
    });
  };
  render() {
    let batchField = null;
    if (this.state.type === "summer") {
      batchField = (
        <select
          className={
            classes.internship__select +
            " " +
            classes["internship__select--small"]
          }
          required
        >
          <option value="" disabled selected hidden>
            Choose Starting Batch
          </option>
          <option value="June 1">June 1</option>
          <option value="June 15">June 15</option>
        </select>
      );
    }
    let fieldContainerClasses = classes.internship__fields__container;
    if (!this.state.visible) {
      fieldContainerClasses += " " + classes.hidden;
    }
    return (
      <WhiteContainer>
        <h1 className={classes.heading__primary}>
          Internship{" "}
          <span className={classes["heading__primary--saffron"]}>
            Registration
          </span>
          <hr className={classes["horizontalRule--mid"]} />
        </h1>

        <form className={classes.internship__form}>
          <span className={classes.typeText}>Type of Internship:</span>
          <div className={classes.select__container}>
            <select
              className={
                classes.internship__select +
                " " +
                classes["internship__select--big"]
              }
              required
              onChange={this.changeTypeHandler}
            >
              <option value="" disabled selected hidden>
                Select Internship Type
              </option>
              <option value="summer">Summer Internship</option>
              <option value="virtual">Virtual Internship</option>
            </select>
          </div>
          <div className={fieldContainerClasses}>
            {batchField}
            <Inputfield
              type="text"
              placeholder="Name"
              iconClass="fas fa-user"
            />
            <Inputfield
              type="text"
              placeholder="Phone:"
              iconClass="fas fa-phone"
            />
            <Inputfield
              type="email"
              placeholder="Email Address"
              iconClass="fas fa-envelope"
            />
            <Inputfield
              type="text"
              placeholder="College"
              iconClass="fas fa-university"
            />
            <textarea
              placeholder="Address:"
              className={classes.internship__address}
              required
            />
          </div>
          <div className={classes.internship__button__container}>
            <button className={classes.internship__submitButton}>
              Submit <i className="fas fa-paper-plane" />
            </button>
          </div>
        </form>
      </WhiteContainer>
    );
  }
}

export default Internship;
