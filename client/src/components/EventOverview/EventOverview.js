import React from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import classes from "./EventOverview.css";
const eventOverview = props => (
  <WhiteContainer>
    <div className={classes["EventOverview__header"]}>
      <h1 className={classes["EventOverview__heading--primary"]}>
        An overview of our events
      </h1>
      <hr className={classes["EventOverview__horizontal"]} />
    </div>
    <div className={classes["EventOverview__container"]}>
      <p>
        Under Saccha Samarpan we deliver following workshops for teachers,
        parents and support staff which cover Academic, Psychological and Legal
        aspects of child abuse, child rights, and gender equality.
      </p>
      <ul className={classes["EventOverview__list"]}>
        <li className={classes["EventOverview__listItem"]}>
          Impact of UNCRC on Indian education and Judicial System
        </li>
        <li className={classes["EventOverview__listItem"]}>
          Impact of UNCRC on Indian education and Judicial System
        </li>
        <li className={classes["EventOverview__listItem"]}>
          Impact of UNCRC on Indian education and Judicial System
        </li>
        <li className={classes["EventOverview__listItem"]}>
          Impact of UNCRC on Indian education and Judicial System
        </li>
        <li className={classes["EventOverview__listItem"]}>
          Impact of UNCRC on Indian education and Judicial System
        </li>
        <li className={classes["EventOverview__listItem"]}>
          JJA 2015 – Reform and Rehabilitation
        </li>
        <li className={classes["EventOverview__listItem"]}>
          JJA 2015 – Reform and Rehabilitation
        </li>
        <li className={classes["EventOverview__listItem"]}>
          JJA 2015 – Reform and Rehabilitation
        </li>
        <li className={classes["EventOverview__listItem"]}>
          JJA 2015 – Reform and Rehabilitation
        </li>
      </ul>
    </div>
  </WhiteContainer>
);

export default eventOverview;
