import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";
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
              </span>
              <a
                className="footer__contact__phoneLink"
                href="tel:+919211458806"
              >
                +91 9211458806
              </a>
            </div>
            <div className="footer__contactInfo__email">
              <span className="footer__iconSpan">
                <i className="fas fa-envelope" />
              </span>
              <a
                href="mailto:sacchasamarpan@yahoo.com"
                className="footer__contactInfo__emailLink"
              >
                sacchasamarpan@yahoo.com
              </a>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__about">
            <h1 className="footer__heading">About Section</h1>
            <hr className="footer__HR" />
            <ul className="footer__list">
              <li className="footer__list__item">
                <Link to="/about" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> About Saccha Samarpan
                </Link>
              </li>
              <li className="footer__list__item">
                <Link to="/donate" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Refund Policy
                </Link>
              </li>
              <li className="footer__list__item">
                <Link to="/donate" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Terms & Conditions
                </Link>
              </li>
              <li className="footer__list__item">
                <Link to="/donate" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h1 className="footer__heading">Quick Links</h1>
            <hr className="footer__HR" />
            <ul className="footer__list">
              <li className="footer__list__item">
                <Link to="/" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> ID Form
                </Link>
              </li>
              <li className="footer__list__item">
                <Link to="/events" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Events
                </Link>
              </li>
              <li className="footer__list__item">
                <Link to="/registration" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Join Us
                </Link>
              </li>
              <li className="footer__list__item">
                <Link to="/internship" className="footer__list__item__text">
                  <i className="fas fa-angle-right" /> Internship
                </Link>
              </li>
              <li className="footer__list__item">
                <Link
                  to="/contact"
                  className="footer__list__item__text"
                >
                  <i className="fas fa-angle-right" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <Zoom>
            <div className="footer__mapContainer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.119140935912!2d77.22824095055613!3d28.506062982381827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a33d8ed9b5%3A0xbd36fa4d47458ebd!2sMahila+Training+Institute!5e0!3m2!1sen!2sin!4v1531673041841"
                frameBorder="0"
                allowFullScreen
                title="hq-map"
                className="footer__map"
              />
            </div>
          </Zoom>
        </div>
      </footer>
      <div className="footer__copyRight">
        © 2018 Saccha Samarthan All Right Reserved
      </div>
    </Fragment>
  );
};

export default footer;
