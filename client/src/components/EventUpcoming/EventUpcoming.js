import React, { Component } from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import Event from "./Event/Event";
import classes from "./EventUpcoming.css";

class EventUpcoming extends Component {
  state = {
    events: [
      {
        Date: "7th July 2018",
        Timings: "9:00 AM To 12:30 AM",
        Venue:
          "Bal Bharti Public School, Sector 1, IMT Manesar, Gurugram, Haryana 122051",
        Subject:
          "Orientation on Project CACA, Awareness Legal – Laws related to children safety especially POCSO & Sensitisation Dealing with Child Sexual Abuse and Trauma"
      },
      {
        Date: "7th July 2018",
        Timings: "9:00 AM To 12:30 AM",
        Venue:
          "Bal Bharti Public School, Sector 1, IMT Manesar, Gurugram, Haryana 122051",
        Subject:
          "Orientation on Project CACA, Awareness Legal – Laws related to children safety especially POCSO & Sensitisation Dealing with Child Sexual Abuse and Trauma"
      },
      {
        Date: "7th July 2018",
        Timings: "9:00 AM To 12:30 AM",
        Venue:
          "Bal Bharti Public School, Sector 1, IMT Manesar, Gurugram, Haryana 122051",
        Subject:
          "Orientation on Project CACA, Awareness Legal – Laws related to children safety especially POCSO & Sensitisation Dealing with Child Sexual Abuse and Trauma"
      }
    ]
  };
  render() {
    let events = this.state.events.map((event, id) => {
      return (
        <Event
          date={event.Date}
          venue={event.Venue}
          timings={event.Timings}
          subject={event.Subject}
        />
      );
    });

    return (
      <WhiteContainer>
        <h1 className={classes["heading--primary"]}>Our Upcoming Events</h1>
        <div className={classes["container"]}>
            {events}
        </div>
      </WhiteContainer>
    );
  }
}

export default EventUpcoming;
