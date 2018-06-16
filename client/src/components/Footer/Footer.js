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
            <img src={Logo} alt="Logo" className={classes.logo} />
          </div>
          <div className={classes.footer__contactInfo}>
            <div className={classes.footer__contactInfo__phone}>
              <span className={classes.iconSpan}>
                <i class="fas fa-phone" />
              </span>{" "}
              +91 9999999999
            </div>
            <div className={classes.footer__contactInfo__email}>
              <span className={classes.iconSpan}>
                <i class="fas fa-envelope" />
              </span>{" "}
              info@example.com
            </div>
          </div>
        </div>
        <div className={classes.footer__right}>
          <div className={classes.about}>
            <h1 className={classes.heading}>About Section</h1>
            <hr />
            <ul className={classes.list}>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> About Sacha Samarpan
                </a>
              </li>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> Refund Policy
                </a>
              </li>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> Terms & Conditions
                </a>
              </li>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.links}>
            <h1 className={classes.heading}>Quick Links</h1>
            <hr />
            <ul className={classes.list}>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> ID Form
                </a>
              </li>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> Events
                </a>
              </li>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> Join Us
                </a>
              </li>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> Internship
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.projects}>
            <h1 className={classes.heading}>Our projects</h1>
            <hr />
            <ul className={classes.list}>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> ID Form
                </a>
              </li>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> Events
                </a>
              </li>
              <li className={classes.list__item}>
                <a href="/" className={classes.list__item__text}>
                  <i class="fas fa-angle-right" /> Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={classes.copyRight}>
        © 2018 Sacha Samarthan All Right Reserved
      </div>
    </Aux>
  );
};

export default footer;
