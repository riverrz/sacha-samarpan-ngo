import React from "react";
import "./Inputfield.css";
const inputfield = props => {
  return (
    <div className="inputfield__container">
      <input required className="inputfield" {...props} />
      {props.iconClass ? <i className={props.iconClass} /> : null}
    </div>
  );
};

export default inputfield;
