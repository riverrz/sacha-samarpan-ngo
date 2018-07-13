import React from "react";
import  "./Event.css";
const event = props => (
  <div className="event__container">
    <h2 className='event__bold'>
      <span className='event__bolder'>Date: {props.date}</span>
    </h2>
    <h2 className='event__bold'>
      <span className='event__bolder'>Timings: {props.timings}</span>
    </h2>
    <h2 className='event__bold'>
      <span className='event__bolder'>Venue:</span> {props.venue}
    </h2>
    <h2 className='event__bold'>
      <span className='event__bolder'>Subject:</span> {props.subject}
    </h2>
  </div>
);

export default event;
