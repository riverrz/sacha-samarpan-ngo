import React from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import classes from "./EventArchive.css";
const eventArchive = props => (
  <WhiteContainer>
    <h1 className={classes["heading--primary"]}>
      Event Archives <i className="fas fa-archive" />
    </h1>
  </WhiteContainer>
);

export default eventArchive;
