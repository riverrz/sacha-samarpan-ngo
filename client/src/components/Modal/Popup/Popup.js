import React from "react";
import "./Popup.css";
import ExitButton from "../ExitButton/ExitButton";
// import InternshipContent from "./InternshipContent";
import MissionBhukh from "./MissionBhukh";

const popup = props => {
  return (
    <div className="popup__container">
      <MissionBhukh {...props} />
      <ExitButton />
    </div>
  );
};



export default popup;
