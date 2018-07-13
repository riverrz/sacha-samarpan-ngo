import React from "react";
import classes from "./Event.css";
const event = props => (
  <div className={classes["event__container"]}>
    <h2 className={classes.event__bold}>
      <span className={classes.event__bolder}>Date: {props.date}</span>
    </h2>
    <h2 className={classes.event__bold}>
      <span className={classes.event__bolder}>Timings: {props.timings}</span>
    </h2>
    <h2 className={classes.event__bold}>
      <span className={classes.event__bolder}>Venue:</span> {props.venue}
    </h2>
    <h2 className={classes.event__bold}>
      <span className={classes.event__bolder}>Subject:</span> {props.subject}
    </h2>
  </div>
);

export default event;
