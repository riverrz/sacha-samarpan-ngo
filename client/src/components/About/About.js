import React from "react";
import classes from "./About.css";
import WhiteContainer from '../../containers/WhiteContainer/WhiteContainer';
const about = props => (
  <WhiteContainer>
    <h1 className={classes.headingPrimary}>
      Welcome to{" "}
      <span className={classes.headingPrimarySpan}>Sacha Samarthan</span>
    </h1>
    <h2 className={classes.subHeading}>Something about us</h2>
    <hr className={classes.mainHR}/>
    <div className={classes.textBox}>
      <h2 className={classes.innerHeading}>Our Vision</h2>
      <hr className={classes.subHR} />
      <p>
        We want to see an India where every child gets an education, every youth
        an opportunity to succeed, and every woman the right to equality.
      </p>
      <h2 className={classes.innerHeading}>Our Mission</h2>
      <hr className={classes.subHR} />
      <p>
        To enable people to take responsibility for the situation of the
        deprived Indian child and so motivate them to seek resolution through
        individual and collective action thereby enabling children to realise
        their full potential To make people discover their potential for action
        and change To enable peoples’ collectives and movements encompassing
        diverse segments, to pledge their particular strengths, working in
        partnership to secure, protect and honour the rights of India’s
        children.
      </p>
    </div>
  </WhiteContainer>
);

export default about;
