import React from "react";
import "./Error.css";

const error = props => (
  <div className="error__container">
    <h3 className="error__heading">
      An error has occured while performing this action! Please try again later
    </h3>
  </div>
);

export default error;
