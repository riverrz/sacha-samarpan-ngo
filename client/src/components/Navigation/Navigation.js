import React from "react";
import classes from "./Navigation.css";
import Logo from "../../assets/logo.png";
const navigation = props => {
  return (
    <div className={classes.nav}>
      <div className={classes.nav__contact}>
        <div className={classes.nav__contact__number}>
          <i class="fas fa-phone-square" /> 9999999999
        </div>
        <div className={classes.nav__contact__email}>
          <i class="fas fa-envelope" /> info@example.com
        </div>
        <div className={classes.nav__contact__social}>
          <a href="#">
            <i class="fab fa-facebook" />
          </a>
          <a href="#">
            <i class="fab fa-google-plus" />
          </a>
        </div>
      </div>
      <nav className={classes.navigation}>
        <div className={classes.navigation__item}>
          <img className={classes.logo} src={Logo} alt="Logo" />
        </div>
        <div className={classes.navigation__item}>
          <a href="3">About</a>
        </div>
        <div className={classes.navigation__item}>
          <a href="3">Contact Us</a>
        </div>
        <div className={classes.navigation__item}>
          <a href="3">Donate Now</a>
        </div>
        <div className={classes.navigation__item}>
          <a href="3">Gallery</a>
        </div>
        <div className={classes.navigation__item}>
          <a href="3">Programs</a>
        </div>
        <div className={classes.navigation__item}>
          <a href="3">Courses</a>
        </div>
        <div className={classes.navigation__item}>
          <a href="3">Registration Form</a>
        </div>
      </nav>
    </div>
  );
};

export default navigation;
