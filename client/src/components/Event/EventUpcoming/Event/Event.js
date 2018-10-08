import React from "react";
import "./Event.css";
import { Fade } from "react-reveal";

const event = props => (
  <Fade bottom>
    <ul className="event__list">
      <li className="event__list__item">
        <span className="event__list__title">Date:</span>
        <span className="event__list__detail"> 7th July 2018</span>
      </li>
      <li className="event__list__item">
        <span className="event__list__title">Timings:</span>
        <span className="event__list__detail"> 9:00AM To 12:30PM</span>
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
          Orientation on Project CACA, Awareness Legal – Laws related to
          children safety especially POCSO & Sensitisation Dealing with Child
          Sexual Abuse and Trauma
        </span>
      </li>
    </ul>
  </Fade>
);

export default event;
