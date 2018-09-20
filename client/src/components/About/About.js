import React from "react";
import "./About.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import { Fade, Flip } from "react-reveal";

const about = props => (
  <WhiteContainer>
    <h1 className="about__headingPrimary">
      <Flip left cascade>
        Welcome
      </Flip>
    </h1>
    <h2 className="about__subHeading">Something about us</h2>
    <hr className="about__mainHR" />
    <div className="about__textBox">
      <h2 className="about__innerHeading">
        <Flip left cascade delay={500}>
          Our Vision
        </Flip>
      </h2>
      <hr className="about__subHR" />
      <Fade bottom delay={800}>
        <p>
          We want to see an India where every child gets an education, every
          youth an opportunity to succeed, and every woman the right to
          equality.
        </p>
      </Fade>
      <h2 className="about__innerHeading">
        <Flip left cascade delay={500}>
          Our Mission
        </Flip>
      </h2>
      <hr className="about__subHR" />
      <Fade bottom delay={800}>
        <p>
          To enable people to take responsibility for the situation of the
          deprived Indian child and so motivate them to seek resolution through
          individual and collective action thereby enabling children to realise
          their full potential To make people discover their potential for
          action and change To enable peoples’ collectives and movements
          encompassing diverse segments, to pledge their particular strengths,
          working in partnership to secure, protect and honour the rights of
          India’s children.
        </p>
      </Fade>
    </div>
  </WhiteContainer>
);

export default about;
