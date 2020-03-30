import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import "../IssuesAndViews/IssuesAndViews.css";
import "./MissionBhukh.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

const MissionBhukh = props => {
  const style = {
    textAlign: "left",
    paddingLeft: "4rem"
  };
  return (
    <WhiteContainer style={style}>
      <div className="issues__content">
        <h1>Corona Virus</h1>
        <Fade bottom>
          <p>
            The outbreak of coronavirus disease <strong>(COVID-19)</strong> has
            been declared a Public Health Emergency of International Concern,
            and the virus has spread to many countries and territories. While
            COVID-19 continues to spread, it is important that communities take
            action to prevent further transmission, reduce the impacts of the
            outbreak and support control measures.
          </p>
          <p>
            Because of this pandemic, many people of india are unable to get a
            single meal of a day and their is a high possibility for those needy
            people to lose their life against covid-19.
          </p>
          <h1>Mission Bhukh</h1>
          <p>
            Saccha Samarpan NGO is running <strong>Mission Bhukh</strong> from{" "}
            <strong>25th March 2020</strong> and will continue this mission till
            the country lockdown comes to an end.
          </p>
          <p>
            In this mission, each and every individual who is capable to support
            those people either by providing food or by helping them
            financially, can contribute to this mission and this support will be
            an unforgettable contribution to mankind.
          </p>
          <p>
            People who want to contribute to this mankind can contact to the
            provided phone nos:-
            <a
              style={{
                margin: "1rem auto",
                display: "block",
                textAlign: "center"
              }}
              href="tel:+91 9811700053"
            >
              9811700053
            </a>
            <a
              style={{
                margin: "1rem auto",
                display: "block",
                textAlign: "center"
              }}
              href="tel:+91 9211807677"
            >
              9211807677
            </a>
            <a
              style={{
                margin: "1rem auto",
                display: "block",
                textAlign: "center"
              }}
              href="tel:+91 9212180053"
            >
              9212180053
            </a>
            <a
              style={{
                margin: "1rem auto",
                display: "block",
                textAlign: "center"
              }}
              href="tel:+91 9212580053"
            >
              9212580053
            </a>
          </p>
          <div style={{ textAlign: "center" }}>
            <h3>Please consider donating to help this cause</h3>
            <Link to="/donate">
              <button className="Donate__btn">DONATE</button>
            </Link>
          </div>
        </Fade>
      </div>
    </WhiteContainer>
  );
};

export default MissionBhukh;
