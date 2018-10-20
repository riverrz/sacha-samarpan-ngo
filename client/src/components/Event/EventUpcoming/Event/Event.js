import React from "react";
import "./Event.css";
import { Fade } from "react-reveal";

const event = props => (
  <Fade bottom>
    <ul className="event__list">
      <li className="event__list__item">
        <span className="event__list__title">Date:</span>
        <span className="event__list__detail"> {props.date}</span>
      </li>
      <li className="event__list__item">
        <span className="event__list__title">Timings:</span>
        <span className="event__list__detail"> {props.timings}</span>
      </li>
      <li className="event__list__item">
        <span className="event__list__title">Venue: </span>
        <span className="event__list__detail">{props.venue}</span>
      </li>
      <li className="event__list__item">
        <span className="event__list__title">Subject: </span>
        <span className="event__list__detail">{props.subject}</span>
      </li>
    </ul>
  </Fade>
);

export default event;
