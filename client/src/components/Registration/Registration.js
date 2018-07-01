import React from "react";
import classes from "./Registration.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import Inputfield from "../Inputfield/Inputfield";
const registration = props => (
  <WhiteContainer>
    <h1 className={classes["registration__heading--primary"]}>
      Join Us{" "}
      <span className={classes.heading__primary__span}>for a cause</span>
    </h1>
    <hr className={classes.registration__horizontalRule} />
    <form className={classes.registration__form}>
      <p>Pay it to coordinator by selecting Payment Mode as Offline</p>
      <div className={classes.registration__inputfields__container}>
        <Inputfield type="text" placeholder="Name:" iconClass="fas fa-user" />
        <Inputfield type="text" placeholder="Phone:" iconClass="fas fa-phone" />
        <Inputfield
          type="email"
          placeholder="Email Address"
          iconClass="fas fa-envelope"
        />
        <Inputfield
          type="text"
          placeholder="College/Working"
          iconClass="fas fa-university"
        />
        <textarea
          placeholder="Address:"
          className={classes.registration__address}
          required
        />
        <select className={classes.registration__select} required>
          <option value="" disabled selected hidden>
            Select Project
          </option>
          <option value="Project 1">Project 1</option>
          <option value="Project 2">Project 2</option>
        </select>
        <select className={classes.registration__select} required>
          <option value="" disabled selected hidden>
            Registration Duration
          </option>
          <option value="1 Year">1 Year</option>
          <option value="3 Year">3 Year</option>
          <option value="Lifetime">Lifetime</option>
        </select>
        <select className={classes.registration__select} required>
          <option value="" disabled selected hidden>
            Payment Mode
          </option>
          <option value="offline">Offline</option>
          <option value="online">Debit/Credit Card/ Net banking/Paytm</option>
        </select>
      </div>
    </form>
    <div className={classes.registration__button__container}>
      <button className={classes.registration__submitButton}>
        Submit <i className="fas fa-paper-plane" />
      </button>
    </div>
  </WhiteContainer>
);

export default registration;
