import React from "react";

import classes from "./Navigation.css";
import Logo from "../../assets/logo.png";
import classNames from "classnames";
import Aux from "../../hoc/Aux";
import Dropdown from "../Dropdown/Dropdown";
import { Link,NavLink } from "react-router-dom";
const navigation = props => {
  // let images = [
  //   "../../assets/1.jpg",
  //   "../../assets/2.jpg",
  //   "../../assets/3.jpg"
  // ];
  return <Aux>
      <div className={classes.nav}>
        <div className={classes.nav__contact}>
          <div className={classes.nav__contact__number}>
            <i class="fas fa-phone" /> 9999999999
          </div>
          <div className={classes.nav__contact__email}>
            <i class="fas fa-envelope" /> info@example.com
          </div>
          <div className={classes.nav__contact__social}>
            <Link to="/important-links" className={classes.impLink}>Important Links</Link>
            <a href="/">
              <i class="fab fa-facebook" />
            </a>
            <a href="/">
              <i class="fab fa-google-plus" />
            </a>
          </div>
        </div>
        <nav className={classes.navigation}>
          <div className={classNames({
              [classes.navigation__item]: true,
              [classes.logoBox]: true
            })}>
            <Link to="/" exact className={classes.logoLink}><img className={classes.logo} src={Logo} alt="Logo" /></Link>
          </div>
          <div className={classes.navigation__item}>
            <NavLink to="/about" activeClassName={classes.active}>
              About
            </NavLink>
            <Dropdown>
              <li>
                <Link to="/about" exact>
                  <i class="fas fa-angle-right" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/issues" exact>
                  <i class="fas fa-angle-right" /> Issues & Views
                </Link>
              </li>
              <li>
                <Link to="/founders" exact>
                  <i class="fas fa-angle-right" /> Founders
                </Link>
              </li>
            </Dropdown>
          </div>
          <div className={classes.navigation__item}>
            <a href="/">Contact</a>
          </div>
          <div className={classes.navigation__item}>
            <a href="/">Donate</a>
          </div>
          <div className={classes.navigation__item}>
            <a href="/">Gallery</a>
          </div>
          <div className={classes.navigation__item}>
            <a href="/">Programs</a>
            <Dropdown>
              <li>
                <a href="/">
                  <i class="fas fa-angle-right" /> Program 1
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fas fa-angle-right" /> Program 2
                </a>
              </li>
            </Dropdown>
          </div>
          <div className={classes.navigation__item}>
            <a href="/">Courses</a>
          </div>
          <div className={classes.navigation__item}>
            <a href="/">Registration</a>
          </div>
        </nav>
      </div>
    </Aux>;
};

export default navigation;
