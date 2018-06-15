import React from "react";
import classes from "./Footer.css";
import Logo from "../../assets/logo.png";
const footer = props => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__left}>
        <div className={classes.footer__logoBox}>
          <img src={Logo} alt="Logo" className={classes.logo} />
        </div>
        <div className={classes.footer__contactInfo}>
          <div className={classes.footer__contactInfo__phone}>
            <i class="fas fa-phone-square" /> 9999999999
          </div>
          <div className={classes.footer__contactInfo__email}>
            <i class="fas fa-envelope" /> info@example.com
          </div>
        </div>
      </div>
      <div className={classes.footer__right}>
        <div className={classes.about}>
          <h1 className={classes.heading}>About Section</h1>
          <hr />
          <ul className={classes.list}>
            <li className={classes.list__item}>
              <a href="#" className={classes.list__item__text}>
                <i class="fas fa-angle-right" /> About Sacha Samarpan
              </a>
            </li>
            <li className={classes.list__item}>
              <a href="#" className={classes.list__item__text}>
                <i class="fas fa-angle-right" /> Refund Policy
              </a>
            </li>
            <li className={classes.list__item}>
              <a href="#" className={classes.list__item__text}>
                <i class="fas fa-angle-right" /> Terms & Conditions
              </a>
            </li>
            <li className={classes.list__item}>
              <a href="#" className={classes.list__item__text}>
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
              <a href="#" className={classes.list__item__text}>
                <i class="fas fa-angle-right" /> Umeed ID Form
              </a>
            </li>
            <li className={classes.list__item}>
              <a href="#" className={classes.list__item__text}>
                <i class="fas fa-angle-right" /> Events
              </a>
            </li>
            <li className={classes.list__item}>
              <a href="#" className={classes.list__item__text}>
                <i class="fas fa-angle-right" /> Join Us
              </a>
            </li>
            <li className={classes.list__item}>
              <a href="#" className={classes.list__item__text}>
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
              <a href="#" className={classes.list__item__text}>
                <i class="fas fa-angle-right" /> Umeed ID Form
              </a>
            </li>
            <li className={classes.list__item}>
              <a href="#" className={classes.list__item__text}>
                <i class="fas fa-angle-right" /> Events
              </a>
            </li>
            <li className={classes.list__item}>
              <a href="#" className={classes.list__item__text}>
                <i class="fas fa-angle-right" /> Join Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;
