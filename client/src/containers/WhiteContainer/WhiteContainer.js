import React from "react";
import classes from "./WhiteContainer.css";
const whiteContainer = props => {
  return <div className={classes.whiteContainer} style={props.style}>{props.children}</div>
};

export default whiteContainer;
