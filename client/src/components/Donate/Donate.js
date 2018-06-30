import React from "react";
import classes from "./Donate.css";
import DonateLogo from "../../assets/Icons/donation-1.png";
import Inputfield from "../Inputfield/Inputfield";

const donate = props => {
  return (
    <div className={classes.donate__container}>
      <div className={classes.donate__headingContainer}>
        <h1 className={classes.donate__heading}>
          Thank You For{" "}
          <span className={classes.donate__heading__span}>Your Support</span>
          <div className={classes.donate__logoBox}>
            <img
              src={DonateLogo}
              alt="Donation-1"
              className={classes.donate__logo}
            />
          </div>
          <hr className={classes.donate__horizontal} />
        </h1>
      </div>
      <form autoComplete="off" className={classes.donate__form}>
        <Inputfield type="text" placeholder="Name:" iconClass="fas fa-user" />
        <Inputfield
          type="email"
          placeholder="Email Address"
          iconClass="fas fa-envelope"
        />
        <Inputfield type="text" placeholder="Phone:" iconClass="fas fa-phone" />
        <Inputfield
          type="text"
          placeholder="PAN Number"
          iconClass="fas fa-address-card"
        />

        <textarea placeholder="Address:" className={classes.donate__address} />
        <Inputfield
          type="text"
          placeholder="Amount(Rs)"
          iconClass="fas fa-rupee-sign"
        />
        <div className={classes.donate__button__container}>
          <button className={classes.donate__button}>Donate</button>
        </div>
      </form>
    </div>
  );
};

export default donate;
