import React from "react";
import "./Event.css";
const event = props => (
  // <div className="event__container">
  //   <h2 className="event__bold">
  //     <span className="event__bolder">Date: {props.date}</span>
  //   </h2>
  //   <h2 className="event__bold">
  //     <span className="event__bolder">Timings: {props.timings}</span>
  //   </h2>
  //   <h2 className="event__bold">
  //     <span className="event__bolder">Venue:</span>{" "}
  //     <span className="event_detail">{props.venue}</span>
  //   </h2>
  //   <h2 className="event__bold">
  //     <span className="event__bolder">Subject:</span>{" "}
  //     <span className="event_detail">{props.subject}</span>
  //   </h2>
  // </div>
  <ul className="event__list">
    <li className="event__list__item">
      <span className="event__list__title">Date:</span>
      <span className="event__list__detail">
        {" "}
        7th July 2018
      </span>
    </li>
    <li className="event__list__item">
      <span className="event__list__title">Timings:</span>
      <span className="event__list__detail">
        {" "}
        9:00AM To 12:30PM
      </span>
    </li>
    <li className="event__list__item">
      <span className="event__list__title">Venue: </span>
      <span className="event__list__detail">
        {" "}
        Bal Bharti Public School, Sector 1, IMT Manesar, Gurugram, Haryana
        122051
      </span>
    </li>
    <li className="event__list__item">
      <span className="event__list__title">Subject: </span>
      <span className="event__list__detail">
        {" "}
        Orientation on Project CACA, Awareness Legal – Laws related to children
        safety especially POCSO & Sensitisation Dealing with Child Sexual Abuse
        and Trauma
      </span>
    </li>
  </ul>
);

export default event;
