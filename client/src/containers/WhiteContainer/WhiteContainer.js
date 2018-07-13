import React from "react";
import "./WhiteContainer.css";
const whiteContainer = props => {
  return <div className='whiteContainer' style={props.style}>{props.children}</div>
};

export default whiteContainer;
