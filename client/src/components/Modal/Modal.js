import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Modal.css";
import Carousel from "../Carousel/Carousel";
class Modal extends Component {
  state = {
    marginTop: {
      marginTop: null
    }
  };
  componentWillMount() {
    this.setState({
      marginTop: {
        marginTop: Math.round(window.pageYOffset) + 20 + "px"
      }
    });
  }
  render() {
    let content = null;
    if (this.props.for === "gallery") {
      var indexOfLink = this.props.image.indexOf("/images");
      const relativeLink = this.props.image.slice(
        indexOfLink + 8,
        indexOfLink + 9
      );
      content = (
        <div className="modal__container" style={this.state.marginTop}>
          <button
            className="modal__exitButton"
            onClick={this.props.exitClicked}
          >
            <i className="fas fa-times" />
          </button>
          <Carousel
            itemsArr={this.props.itemsArr}
            autoPlay={false}
            selectedItem={relativeLink}
          />
        </div>
      );
    } else if (this.props.for === "popup") {
      content = (
        <div className="modal__popupContainer" style={this.state.marginTop}>
          <img
            src="/images/internship_banner.jpg"
            alt="Internship Banner"
            className="modal__banner"
          />
          <img src="/images/at.png" alt="At icon" className="modal__atIcon" />
          <img
            src={Logo}
            alt="Saccha Samarpan Logo"
            className="modal__logobanner"
          />
          <div className="modal__details">
            <p className="modal__bold">
              Internships are currently being offered to the interested
              candidates
            </p>
            <p>
              <span className="modal__iconContainer">
                <img
                  src="calendar.png"
                  alt="Calendar"
                  className="modal__icon"
                />
              </span>{" "}
              Starting Date: 7th July 2018
            </p>
            <p>
              <span className="modal__iconContainer">
                <img src="document.png" alt="Project" className="modal__icon" />
              </span>{" "}
              Projects: Women Empowerment, Child Education
            </p>
            <p>
              <span className="modal__iconContainer">
                <img
                  src="building.png"
                  alt="Building"
                  className="modal__icon"
                />
              </span>{" "}
              Type of Work: On field Work
            </p>
            <Link
              exact
              to="/internship"
              className="modal__applyLink"
              onClick={this.props.exitClicked}
            >
              Apply Now
            </Link>
          </div>
          <button
            className="modal__exitButton modal__exitButton--bottom"
            onClick={this.props.exitClicked}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      );
    } else if (this.props.for === "video") {
      content = (
        <div className="modal__videoContainer" style={this.state.marginTop}>
          <iframe
            className="modal__video"
            title="pvr"
            frameBorder="0"
            src="https://www.youtube.com/embed/MG7dW2gChOs"
            allowFullScreen
          />
          <button
            className="modal__exitButton  modal__exitButton--bottom"
            onClick={this.props.exitClicked}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      );
    }
    return <Fragment>{content}</Fragment>;
  }
}

export default Modal;
