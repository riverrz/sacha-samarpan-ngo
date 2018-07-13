import React from "react";
import classes from "./Footer.css";
import Logo from "../../assets/logo.png";
import Aux from "../.././hoc/Aux";
const footer = props => {
  return (
    <Aux>
      <footer className={classes.footer}>
        <div className={classes.footer__left}>
          <div className={classes.footer__logoBox}>
            <img src={Logo} alt="Logo" className={classes.footer__logo} />
          </div>
          <div className={classes.footer__contactInfo}>
            <div className={classes.footer__contactInfo__phone}>
              <span className={classes.footer__iconSpan}>
                <i className="fas fa-phone" />
              </span>{" "}
              +91 9211458806
            </div>
            <div className={classes.footer__contactInfo__email}>
              <span className={classes.footer__iconSpan}>
                <i className="fas fa-envelope" />
              </span>{" "}
              info@sacchasamarpan.com
            </div>
          </div>
        </div>
        <div className={classes.footer__right}>
          <div className={classes.footer__about}>
            <h1 className={classes.footer__heading}>About Section</h1>
            <hr className={classes.footer__HR}/>
            <ul className={classes.footer__list}>
              <li className={classes.footer__list__item}>
                <a href="/" className={classes.footer__list__item__text}>
                  <i className="fas fa-angle-right" /> About Sacha Samarpan
                </a>
              </li>
              <li className={classes.footer__list__item}>
                <a href="/" className={classes.footer__list__item__text}>
                  <i className="fas fa-angle-right" /> Refund Policy
                </a>
              </li>
              <li className={classes.footer__list__item}>
                <a href="/" className={classes.footer__list__item__text}>
                  <i className="fas fa-angle-right" /> Terms & Conditions
                </a>
              </li>
              <li className={classes.footer__list__item}>
                <a href="/" className={classes.footer__list__item__text}>
                  <i className="fas fa-angle-right" /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.footer__links}>
            <h1 className={classes.footer__heading}>Quick Links</h1>
            <hr className={classes.footer__HR}/>
            <ul className={classes.footer__list}>
              <li className={classes.footer__list__item}>
                <a href="/" className={classes.footer__list__item__text}>
                  <i className="fas fa-angle-right" /> ID Form
                </a>
              </li>
              <li className={classes.footer__list__item}>
                <a href="/" className={classes.footer__list__item__text}>
                  <i className="fas fa-angle-right" /> Events
                </a>
              </li>
              <li className={classes.footer__list__item}>
                <a href="/" className={classes.footer__list__item__text}>
                  <i className="fas fa-angle-right" /> Join Us
                </a>
              </li>
              <li className={classes.footer__list__item}>
                <a href="/" className={classes.footer__list__item__text}>
                  <i className="fas fa-angle-right" /> Internship
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </footer>
      <div className={classes.footer__copyRight}>
        © 2018 Sacha Samarthan All Right Reserved
      </div>
    </Aux>
  );
};

export default footer;
