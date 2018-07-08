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
      width: "85%",
      
    };
    if (this.state.scrollingLock) {
      styleForFixedNav = { position: "fixed", top: "0", width: "100%", transform: "translateX(0)" };
    }
    return <Aux>
        <div className={classes.nav}>
          <div className={classes.nav__contact}>
            <div className={classes.nav__contact__number}>
              <i className="fas fa-phone" /> +91 9211458806
            </div>
            <div className={classes.nav__contact__email}>
              <i className="fas fa-envelope" /> info@sacchasamarpan.com
            </div>
            <div className={classes.nav__contact__social}>
              <a href="/">
                <i className="fab fa-facebook" />
              </a>
              <a href="/">
                <i className="fab fa-google-plus" />
              </a>
            </div>
          </div>
        </div>
        <nav className={classes.navigation} style={styleForFixedNav}>
          <div className={classNames({
              [classes.navigation__item]: true,
              [classes.logoBox]: true
            })}>
            <img className={classes.logo} src={Logo} alt="Logo" />
          </div>
          <div className={classes.navigation__item}>
          <NavLink to="/" exact activeClassName={classes.active}>
              Home
            </NavLink>
          </div>
          <div className={classes.navigation__item}>
            <NavLink to="/about" activeClassName={classes.active}>
              About
            </NavLink>
            <Dropdown>
              <li>
                <Link to="/about" exact>
                  <i className="fas fa-angle-right" /> About Us
                </Link>
              </li>

              <li>
                <Link to="/about/founders" exact>
                  <i className="fas fa-angle-right" /> Founders
                </Link>
              </li>
              <li>
                <Link to="/about/team" exact>
                  <i className="fas fa-angle-right" /> Our Team
                </Link>
              </li>
              <li>
                <Link to="/about/issues" exact>
                  <i className="fas fa-angle-right" /> Issues & Views
                </Link>
              </li>
            </Dropdown>
          </div>

          <div className={classes.navigation__item}>
          <NavLink to="/full-gallery" exact activeClassName={classes.active}>
              Gallery
            </NavLink>
          </div>
          <div className={classes.navigation__item}>
          <NavLink to="/internship" exact activeClassName={classes.active}>
              Internship
            </NavLink>
          </div>

          <div className={classes.navigation__item}>
            <a href="/">Events</a>
            <Dropdown>
              <li>
                <a href="/">
                  <i className="fas fa-angle-right" /> Overview
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fas fa-angle-right" /> Events Archive
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fas fa-angle-right" /> Upcoming Events
                </a>
              </li>
            </Dropdown>
          </div>

          <div className={classes.navigation__item}>
          <NavLink to="/registration" exact activeClassName={classes.active}>
              Registration
            </NavLink>
          </div>
          <div className={classes.navigation__item}>
          <NavLink to="/important-links" exact activeClassName={classes.active}>
              Important Links
            </NavLink>
          </div>
          <div className={classes.navigation__item + " " + classes.navigation__donate}>
            <Link to="/donate" exact>
              <strong className={classes.navigation__donate__strong}>
                Donate
              </strong>
            </Link>
          </div>
        </nav>
      </Aux>;
  }
}

export default Navigation;
