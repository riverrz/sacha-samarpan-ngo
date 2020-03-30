import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default props => (
  <Fragment>
    <img
      src="/images/corona-virus.jpg"
      alt="Corona Virus"
      className="img__head"
    />
    <img src="/images/bhukh.jpg" alt="Hunger" className="img__head" />
    <div className="popup__details">
      <h2>Mission Bhukh</h2>
      <p>
        The outbreak of coronavirus disease (COVID-19) has been declared a
        Public Health Emergency of International Concern, and the virus has
        spread to many countries and territories.
      </p>
      <p>
        Saccha Samarpan NGO is running this mission from 25th March 2020 and
        will continue it till the country lockdown comes to an end. This mission
        is to help those needy people who got stucked on roads and have no food
        to eat.
      </p>
    </div>
    <div className="link__container">
      <Link
        onClick={props.exitClicked}
        to="/about/mission-bhukh"
        className="btn"
      >
        Learn more
      </Link>
      <Link onClick={props.exitClicked} to="/donate" className="btn">
        Donate
      </Link>
    </div>
  </Fragment>
);
