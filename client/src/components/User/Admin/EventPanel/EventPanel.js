import React from "react";
import "./EventPanel.css";

const eventPanel = props => (
  <div>
    <h1>Enter the following fields </h1>
    <form
      className="eventPanel__form"
      action="/events"
      method="POST"
      enctype="multipart/form-data"
    >
      <input className="eventPanel__input" name="date" type="date" required />
      <input
        className="eventPanel__input"
        name="timings"
        type="text"
        required
        placeholder="Timings"
      />
      <input
        className="eventPanel__input"
        name="venue"
        type="text"
        required
        placeholder="Venue"
      />
      <input
        className="eventPanel__input"
        name="subject"
        type="text"
        required
        placeholder="Subject"
      />
      <textarea
        name="description"
        type="text"
        required
        className="eventPanel__textArea"
      />
      <input className="eventPanel__input" name="image" type="file" required />
      <button className="eventPanel__submitBtn">Submit</button>
    </form>
  </div>
);

export default eventPanel;
