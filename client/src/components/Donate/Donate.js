import React from "react";
import classes from "./Donate.css";
import DonateLogo from "../../assets/Icons/donation-1.png";
import Inputfield from '../Inputfield/Inputfield';

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
      <form autocomplete="off">
          <Inputfield type="text" placeholder="Name"/>
      </form>
    </div>
  );
};

export default donate;
