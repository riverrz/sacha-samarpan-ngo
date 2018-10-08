import React from "react";
import "./EventArch.css";
import { Zoom } from "react-reveal";

const eventArch = props => {
  return (
    <Zoom cascade>
      <div className="eventArch__container">
        <div className="eventArch__img__Container">
          <img src={`/uploads/${props.image}`} className="eventArch__photo" />
        </div>
        <h2 className="eventArch__title">{props.title}</h2>
        <h4 className="eventArch__date">{props.postedOn}</h4>
      </div>
    </Zoom>
  );
};

export default eventArch;
