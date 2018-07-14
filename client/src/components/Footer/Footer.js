import React, { Fragment } from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
const footer = props => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer__left">
          <div className="footer__logoBox">
            <img src={Logo} alt="Logo" className="footer__logo" />
          </div>
          <div className="footer__contactInfo">
            <div className="footer__contactInfo__phone">
              <span className="footer__iconSpan">
                <i className="fas fa-phone" />
              </span>{" "}
              +91 9211458806
            </div>
            <div className="footer__contactInfo__email">
              <span className="footer__iconSpan">
                <i className="fas fa-envelope" />
              </span>{" "}
              info@sacchasamarpan.com
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__about">
            <h1 className="footer__heading">About Section</h1>
            <hr className="footer__HR" />
            <ul className="footer__list">
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> About Sacha Samarpan
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Refund Policy
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Terms & Conditions
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h1 className="footer__heading">Quick Links</h1>
            <hr className="footer__HR" />
            <ul className="footer__list">
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> ID Form
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Events
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Join Us
                </a>
              </li>
              <li className="footer__list__item">
                <a href="/" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Internship
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer__copyRight">
        © 2018 Sacha Samarthan All Right Reserved
      </div>
    </Fragment>
  );
};

export default footer;
