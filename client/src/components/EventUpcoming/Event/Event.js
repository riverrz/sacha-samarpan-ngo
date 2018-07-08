import React from "react";
import classes from "./Event.css";
const event = props => (
  <div className={classes["container"]}>
    <h2 className={classes.bold}>
      <span className={classes.bolder}>Date: {props.date}</span>
    </h2>
    <h2 className={classes.bold}>
      <span className={classes.bolder}>Timings: {props.timings}</span>
    </h2>
    <h2 className={classes.bold}>
      <span className={classes.bolder}>Venue:</span> {props.venue}
    </h2>
    <h2 className={classes.bold}>
      <span className={classes.bolder}>Subject:</span> {props.subject}
    </h2>
  </div>
);

export default event;
