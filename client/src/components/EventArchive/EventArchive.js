import React, { Component } from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import EventArch from "./EventArch/EventArch";
import  "./EventArchive.css";
class EventArchive extends Component {
  state = {
    events: [
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      },
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      },
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      },
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      },
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      },
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      },
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      },
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      },
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      },
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      },
      {
        title: "Bal Bharati School, Gurugram,07.07.18",
        photo: "/images/Events/eventarch.jpg",
        postedOn: "09.07.18"
      }
    ]
  };
  render() {
    let events = this.state.events.map((event, i) => {
      return (
        <EventArch
          key={i}
          photo={event.photo}
          title={event.title}
          postedOn={event.postedOn}
        />
      );
    });
    return (
      <WhiteContainer>
        <h1 className="eventArchive__heading--primary">
          Event Archives <i className="fas fa-archive" />
        </h1>
        <div className='eventArchive__container'>{events}</div>
      </WhiteContainer>
    );
  }
}

export default EventArchive;
