import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import classes from "./Modal.css";
import Aux from "../../hoc/Aux";
class Modal extends Component {
  state = {
    marginTop: {
      "margin-top": null
    }
  };
  componentDidMount() {
    this.setState({
      marginTop: {
        "margin-top": Math.round(window.pageYOffset) + 40 + "px"
      }
    });
  }
  render() {
    let content = null;

    if (this.props.for === "gallery") {
      var indexOfLink = this.props.image.indexOf("/images");
      const relativeLink = this.props.image.slice(indexOfLink);
      content = (
        <div className={classes.modal__container} style={this.state.marginTop}>
          <button
            className={classes.modal__exitButton}
            onClick={this.props.exitClicked}
          >
            <i class="fas fa-times" />
          </button>
          <img src={relativeLink} alt="Invoked" />
        </div>
      );
    } else if (this.props.for === "popup") {
      content = (
        <div className={classes.modal__popupContainer} style={this.state.marginTop}>
          <img
            src="/images/internship_banner.jpg"
            alt="Internship Banner"
            className={classes.modal__banner}
          />
          <img src="/images/at.png" alt="At icon" className={classes.modal__atIcon} />
          <img
            src={Logo}
            alt="Saccha Samarpan Logo"
            className={classes.modal__logobanner}
          />
          <div className={classes.modal__details}>
            <p className={classes.modal__bold}>
              Internships are currently being offered to the interested
              candidates
            </p>
            <p>
              <span className={classes.modal__iconContainer}>
                <img
                  src="calendar.png"
                  alt="Calendar"
                  className={classes.modal__icon}
                />
              </span>{" "}
              Starting Date: 7th July 2018
            </p>
            <p>
              <span className={classes.modal__iconContainer}>
                <img
                  src="document.png"
                  alt="Project"
                  className={classes.modal__icon}
                />
              </span>{" "}
              Projects: Women Empowerment, Child Education
            </p>
            <p>
              <span className={classes.modal__iconContainer}>
                <img
                  src="building.png"
                  alt="Building"
                  className={classes.modal__icon}
                />
              </span>{" "}
              Type of Work: On field Work
            </p>
            <Link exact to="/internship" className={classes.modal__applyLink}>
              Apply Now
            </Link>
          </div>
          <button
            className={classes.modal__exitButton + " " + classes["modal__exitButton--bottom"]}
            onClick={this.props.exitClicked}
          >
            <i class="fas fa-times" />
          </button>
        </div>
      );
    } else if (this.props.for === "video") {
      content = (
        <div
          className={classes.modal__videoContainer}
          style={this.state.marginTop}
        >
          <iframe
            className={classes.modal__video}
            title="pvr"
            frameBorder="0"
            src="https://www.youtube.com/embed/MG7dW2gChOs"
            allowFullScreen
          />
          <button
            className={classes.modal__exitButton + " " + classes["modal__exitButton--bottom"]}
            onClick={this.props.exitClicked}
          >
            <i class="fas fa-times" />
          </button>
        </div>
      );
    }
    return <Aux>{content}</Aux>;
  }
}

export default Modal;
