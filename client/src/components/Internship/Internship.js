import React from "react";
import classes from "./Internship.css";
import WhiteContainer from '../../containers/WhiteContainer/WhiteContainer';
const internship = props => {
  return (
    <WhiteContainer>
      <h1 className={classes.heading__primary}>
        Internship{" "}
        <span className={classes["heading__primary--saffron"]}>
          Registration
        </span>
      </h1>
    </WhiteContainer>
  );
};

export default internship;
