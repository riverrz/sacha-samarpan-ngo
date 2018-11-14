import React, { Component } from "react";
import "./EventArch.css";
import { Zoom } from "react-reveal";
import { withRouter } from "react-router-dom";

class EventArch extends Component {
  onClickHandler = () => {
    this.props.history.push(`/event/${this.props.id}`);
  };
  render() {
    const content = this.props.image.map((img,i) => (
      <div className="eventArch__img__Container" key={i}>
        <img
          src={`/uploads/${img}`}
          className="eventArch__photo"
          alt="event"
        />
      </div>
    ))
    return (
      <Zoom cascade>
        <div className="eventArch__container" onClick={this.onClickHandler}>
          {content}
          <h2 className="eventArch__title">{this.props.title}</h2>
          <h4 className="eventArch__date">{this.props.postedOn}</h4>
        </div>
      </Zoom>
    );
  }
}

export default withRouter(EventArch);
