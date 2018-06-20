import React from "react";
import classes from "./Founders.css";
const founders = props => {
  return (
    <div className={classes.foundersContainer}>
      <h1>
        Our <span>Founders</span>
      </h1>
      <div className={classes.founder}>
        <figure className={classes.figure}>
          <img
            src="/images/founders/founder1.JPG"
            alt="Founder"
            className={classes.founderPhoto}
          />
        </figure>
      </div>
      <div className={classes.founder}>
        <figure className={classes.figure}>
          <img
            src="/images/founders/founder2.jpg"
            alt="Founder"
            className={classes.founderPhoto}
          />
        </figure>
      </div>
    </div>
  );
};

export default founders;
