import React from "react";
import classes from "./WhiteContainer.css";
const whiteContainer = props => (
  <div className={classes.whiteContainer}>{props.children}</div>
);

export default whiteContainer;
