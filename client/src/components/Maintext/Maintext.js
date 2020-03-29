import React from "react";
import { Link } from "react-router-dom";
import "./Maintext.css";
import HeadShake from "react-reveal/HeadShake";

const maintext = props => {
  return (
    <div className="Maintext">
      <h1 className="Maintext__headingPrimary">
        WELCOME TO{" "}
        <span className="Maintext__headingPrimarySpan">SACCHA SAMARPAN</span>{" "}
      </h1>
      <hr className="Maintext__horizontalRule" />
      <div className="Maintext__content">
        <span className="Maintext__main">
          <strong>"Saccha Samarpan"</strong> IS A YOUTH CLUB FORMED BY YOUTHS OF
          THE NATION, THE BASIC MOTTO OF WHICH IS SOCIAL SERVICE. BESIDES THE
          MAIN MOTTO, THE BASIC IDEA OF SUCH A FORMATION IS TO HELP EACH AND
          EVERY HUMAN BEING WHO NEEDS HELP.
        </span>{" "}
        <p>
          Saccha Samarpan works for education for needy children who are under
          difficult circumstances, such as child labour, children of poorest of
          the parents, children inflicted and affected with HIV/AIDS, street and
          runaway children, children with rare disabilities, disaster struck
          children and slum children. Special emphasis is given on girl
          education and women education, so that they and their families get
          empowered.
        </p>
      </div>
      <div className="Maintext__Memberform">
        <h3>DOWNLOAD OUR MEMBERSHIP FORM</h3>
        <HeadShake>
          <Link to="/membership-form.pdf" target="_blank" download>
            <button  style={{ cursor: 'pointer' }}>DOWNLOAD</button>
          </Link>
        </HeadShake>
      </div>
    </div>
  );
};

export default maintext;
