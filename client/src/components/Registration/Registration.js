import React from "react";
import classes from "./Registration.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import Inputfield from "../Inputfield/Inputfield";
const registration = props => (
  <WhiteContainer>
    <h1 className={classes["registration__headingPrimary"]}>
      Join Us{" "}
      <span className={classes.registration__headingPrimarySpan}>for a cause</span>
    </h1>
    <hr className={classes.registration__horizontalRule} />
    <form className={classes.registration__form} action="/registration" method="POST">
      <p>Pay it to coordinator by selecting Payment Mode as Offline</p>
      <div className={classes.registration__inputfields__container}>
        <Inputfield type="text" placeholder="Name:" iconClass="fas fa-user" name="member[name]"/>
        <Inputfield type="text" placeholder="Phone:" iconClass="fas fa-phone" name="member[phone]"/>
        <Inputfield
          type="email"
          placeholder="Email Address"
          iconClass="fas fa-envelope"
          name="member[email]"
        />
        <Inputfield
          type="text"
          placeholder="College/Working"
          iconClass="fas fa-university"
          name="member[work]"
        />
        <textarea
          placeholder="Address:"
          className={classes.registration__address}
          required
          name="member[address]"
        />
        <select className={classes.registration__select} required name='member[project]' id="project">
          <option value="" disabled selected hidden>
            Select Project
          </option>
          <option value="Project 1">Project 1</option>
          <option value="Project 2">Project 2</option>
        </select>
        <select className={classes.registration__select} required name='member[duration]' id="duration">
          <option value="" disabled selected hidden>
            Registration Duration
          </option>
          <option value="1 Year">1 Year (Rs. 50/-)</option>
          <option value="3 Year">3 Year (Rs. 100/-)</option>
          <option value="Lifetime">Lifetime (Rs. 500/-)</option>
        </select>
        <select className={classes.registration__select} required name='member[payMode]' id="payMode">
          <option value="" disabled selected hidden>
            Payment Mode
          </option>
          <option value="offline">Offline</option>
          <option value="online">Debit/Credit Card/ Net banking/Paytm</option>
        </select>
      </div>
      <div className={classes.registration__button__container}>
        <button className={classes.registration__submitButton}>
          Submit <i className="fas fa-paper-plane" />
        </button>
      </div>
    </form>
    
  </WhiteContainer>
);

export default registration;
