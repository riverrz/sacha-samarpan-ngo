import React from "react";
import "./EventArch.css";
import { Zoom } from "react-reveal";

const eventArch = props => (
  <Zoom cascade>
    <div className="eventArch__container">
      <div className="eventArch__img__Container">
        <img
          src={props.photo}
          alt="Event Archive 1"
          className="eventArch__photo"
        />
      </div>
      <h2 className="eventArch__title">{props.title}</h2>
      <h4 className="eventArch__date">{props.postedOn}</h4>
    </div>
  </Zoom>
);

export default eventArch;
