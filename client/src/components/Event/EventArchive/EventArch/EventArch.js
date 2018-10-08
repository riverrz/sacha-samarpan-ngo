import React, { Component } from "react";
import "./EventArch.css";
import MDSpinner from "react-md-spinner";
import { Zoom } from "react-reveal";

class EventArch extends Component {
  state = {
    image: ""
  };

  render() {
    let image;
    if (!this.state.image) {
      image = <MDSpinner size="45" />;
    }
    return (
      <Zoom cascade>
        <div className="eventArch__container">
          <div className="eventArch__img__Container">{image}</div>
          <h2 className="eventArch__title">{this.props.title}</h2>
          <h4 className="eventArch__date">{this.props.postedOn}</h4>
        </div>
      </Zoom>
    );
  }
}

export default EventArch;
