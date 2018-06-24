import React, { Component } from "react";

import classes from "./Navigation.css";
import Logo from "../../assets/logo.png";
import classNames from "classnames";
import Aux from "../../hoc/Aux";
import Dropdown from "../Dropdown/Dropdown";
import { Link, NavLink } from "react-router-dom";
class Navigation extends Component {
  state = {
    scrollingLock: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 100) {
      this.setState({
        scrollingLock: false
      });
    }
  };
  render() {
    let styleForFixedNav = {
      position: "absolute",
      left: "50%",
      top: "4rem",
      width: "80%",
      
    };
    if (this.state.scrollingLock) {
      styleForFixedNav = { position: "fixed", top: "0", width: "100%", transform: "translateX(0)" };
    }
    return (
      <Aux>
        <div className={classes.nav}>
          <div className={classes.nav__contact}>
            <div className={classes.nav__contact__number}>
              <i class="fas fa-phone" /> 9999999999
            </div>
            <div className={classes.nav__contact__email}>
              <i class="fas fa-envelope" /> info@example.com
            </div>
            <div className={classes.nav__contact__social}>
              <a href="/">
                <i class="fab fa-facebook" />
              </a>
              <a href="/">
                <i class="fab fa-google-plus" />
              </a>
            </div>
          </div>
        </div>
        <nav className={classes.navigation} style={styleForFixedNav}>
          <div
            className={classNames({
              [classes.navigation__item]: true,
              [classes.logoBox]: true
            })}
          >
            <img className={classes.logo} src={Logo} alt="Logo" />
          </div>
          <div className={classes.navigation__item}>
            <Link to="/" exact>
              Home
            </Link>
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
                <Link to="/founders" exact>
                  <i class="fas fa-angle-right" /> Founders
                </Link>
              </li>
              <li>
                <Link to="/team" exact>
                  <i class="fas fa-angle-right" /> Our Team
                </Link>
              </li>
              <li>
                <Link to="/issues" exact>
                  <i class="fas fa-angle-right" /> Issues & Views
                </Link>
              </li>
            </Dropdown>
          </div>

          <div className={classes.navigation__item}>
            <Link to="/full-gallery" exact>
              Gallery
            </Link>
          </div>
          <div className={classes.navigation__item}>
            <Link to="/internship" exact>
              Internship
            </Link>
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
            <a href="/">Registration</a>
          </div>
          <div className={classes.navigation__item}>
            <Link to="/important-links" exact>
              Important Links
            </Link>
          </div>
          <div className={classes.navigation__item}>
            <Link to="/donate" exact>
              Donate
            </Link>
          </div>
        </nav>
      </Aux>
    );
  }
}

export default Navigation;
