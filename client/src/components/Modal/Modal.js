import React, { Component } from "react";
import {Link} from 'react-router-dom';
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
        <div className={classes.modalContainer} style={this.state.marginTop}>
          <button
            className={classes.exitButton}
            onClick={this.props.exitClicked}
          >
            <i class="fas fa-times" />
          </button>
          <img src={relativeLink} alt="Invoked" />
        </div>
      );
    } else if (this.props.for === "popup") {
      content = <div className={classes.popupContainer} style={this.state.marginTop}>
          <img src="/images/internship_banner.jpg" alt="Internship Banner" className={classes.banner} />
          <img src="/images/at.png" alt="At icon" className={classes.atIcon} />
          <img src={Logo} alt="Saccha Samarpan Logo" className={classes.logobanner} />
          <div className={classes.details}>
            <p className={classes.bold}>
              Internships are currently being offered to the interested
              candidates
            </p>
            <p>
              <i className="far fa-calendar-alt" /> Starting Date: 7th July 2018
            </p>
            <p>
              <i className="fas fa-folder-open" /> Projects: Women Empowerment, Child Education
            </p>
            <p>
            <i className="far fa-building"></i> Type of Work: On field Work
            </p>
            <Link exact to="/internship" className={classes.applyLink}>Apply Now</Link>
          </div>
        </div>;
    }
    return <Aux>{content}</Aux>;
  }
}

export default Modal;
