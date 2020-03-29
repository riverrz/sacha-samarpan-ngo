import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import ExitButton from "../ExitButton/ExitButton";

const InternshipContent = props => (
  <Fragment>
    <img
      src="/images/internship_banner.jpg"
      alt="Internship Banner"
      className="popup__banner"
    />
    <img src="/images/at.png" alt="At icon" className="popup__atIcon" />
    <img src={Logo} alt="Saccha Samarpan Logo" className="popup__logobanner" />
    <div className="popup__details">
      <p className="popup__bold">
        Internships are currently being offered to the interested candidates
      </p>
      {/* <p>
          <span className="popup__iconContainer">
            <img src="calendar.png" alt="Calendar" className="popup__icon" />
          </span>{" "}
          Starting Date: 7th July 2018
        </p> */}
      <p>
        <span className="popup__iconContainer">
          <img src="document.png" alt="Project" className="popup__icon" />
        </span>{" "}
        Projects: Women Empowerment, Child Education
      </p>
      <p>
        <span className="popup__iconContainer">
          <img src="building.png" alt="Building" className="popup__icon" />
        </span>{" "}
        Type of Work: On field Work
      </p>
      <Link
        exact
        to="/internship"
        className="popup__applyLink"
        onClick={props.exitClicked}
      >
        Apply Now
      </Link>
    </div>
    <ExitButton />
  </Fragment>
);

export default InternshipContent;