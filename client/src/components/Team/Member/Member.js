import React from "react";
import { Fade } from "react-reveal";

import "./Member.css";
const member = props => {
  let memberContactArr = [];
  if (props.facebook) {
    const facebookContact = (
      <a
        href={props.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="member__iconContainer"
        key="1"
      >
        <img src="/facebook.png" alt="Facebook link" className="member__icon" />
      </a>
    );
    memberContactArr.push(facebookContact);
  } else if (props.instagram) {
    const instagramContact = (
      <a
        href={props.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="member__iconContainer"
        key="2"
      >
        <img
          src="/instagram.png"
          alt="Instagram link"
          className="member__icon"
        />
      </a>
    );
    memberContactArr.push(instagramContact);
  }
  return (
    <div className="member__container">
      <div className="member__imgContainer">
        <img src={props.photo} alt="Member" className="member__img" />
        <div className="member__contactContainer">{memberContactArr}</div>
      </div>
      <Fade bottom cascade>
        <div className="member__textContainer">
          <h2 className="member__name">{props.name}</h2>
          <h3 className="member__designation">{props.designation}</h3>
          <p className="member__description">{props.description}</p>
        </div>
      </Fade>
    </div>
  );
};

export default member;
