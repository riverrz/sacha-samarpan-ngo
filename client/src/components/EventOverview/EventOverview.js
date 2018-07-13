import React from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import  "./EventOverview.css";
const eventOverview = props => (
  <WhiteContainer>
    <div className="EventOverview__header">
      <h1 className="EventOverview__heading--primary">
        An overview of our events
      </h1>
      <hr className="EventOverview__horizontal" />
    </div>
    <div className="EventOverview__container">
      <p>
        Under Saccha Samarpan we deliver following workshops for teachers,
        parents and support staff which cover Academic, Psychological and Legal
        aspects of child abuse, child rights, and gender equality.
      </p>
      <ul className="EventOverview__list">
        <li className="EventOverview__listItem">
          Impact of UNCRC on Indian education and Judicial System
        </li>
        <li className="EventOverview__listItem">
          Impact of UNCRC on Indian education and Judicial System
        </li>
        <li className="EventOverview__listItem">
          Impact of UNCRC on Indian education and Judicial System
        </li>
        <li className="EventOverview__listItem">
          Impact of UNCRC on Indian education and Judicial System
        </li>
        <li className="EventOverview__listItem">
          Impact of UNCRC on Indian education and Judicial System
        </li>
        <li className="EventOverview__listItem">
          JJA 2015 – Reform and Rehabilitation
        </li>
        <li className="EventOverview__listItem">
          JJA 2015 – Reform and Rehabilitation
        </li>
        <li className="EventOverview__listItem">
          JJA 2015 – Reform and Rehabilitation
        </li>
        <li className="EventOverview__listItem">
          JJA 2015 – Reform and Rehabilitation
        </li>
      </ul>
    </div>
  </WhiteContainer>
);

export default eventOverview;
