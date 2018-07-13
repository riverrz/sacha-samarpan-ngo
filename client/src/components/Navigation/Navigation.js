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
      width: "85%"
    };
    if (this.state.scrollingLock) {
      styleForFixedNav = {
        position: "fixed",
        top: "0",
        width: "100%",
        transform: "translateX(0)"
      };
    }
    return (
      <Aux>
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
              <a href="/">
                <i class="fab fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>
        <nav className={classes.navigation} style={styleForFixedNav}>
          <div
            className={classNames({
              [classes.navigation__item]: true,
              [classes.navigation__logoBox]: true
            })}
          >
            <img className={classes.navigation__logo} src={Logo} alt="Logo" />
          </div>
          <div className={classes.navigation__item}>
            <NavLink to="/" exact activeClassName={classes.navigation__active}>
              Home
            </NavLink>
          </div>
          <div className={classes.navigation__item}>
            <NavLink to="/about" activeClassName={classes.navigation__active}>
              About
            </NavLink>
            <Dropdown>
              <li>
                <NavLink
                  to="/about"
                  exact
                  activeClassName={classes.navigation__activeDropDown}
                >
                  <i className="fas fa-angle-right" /> Overview
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about/founders"
                  exact
                  activeClassName={classes.navigation__activeDropDown}
                >
                  <i className="fas fa-angle-right" /> Founders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about/team"
                  exact
                  activeClassName={classes.navigation__activeDropDown}
                >
                  <i className="fas fa-angle-right" /> Our Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about/issues"
                  exact
                  activeClassName={classes.navigation__activeDropDown}
                >
                  <i className="fas fa-angle-right" /> Issues & Views
                </NavLink>
              </li>
            </Dropdown>
          </div>

          <div className={classes.navigation__item}>
            <NavLink to="/full-gallery" exact activeClassName={classes.navigation__active}>
              Gallery
            </NavLink>
          </div>
          <div className={classes.navigation__item}>
            <NavLink to="/internship" exact activeClassName={classes.navigation__active}>
              Internship
            </NavLink>
          </div>

          <div className={classes.navigation__item}>
            <NavLink to="/events" activeClassName={classes.navigation__active}>
              Events
            </NavLink>
            <Dropdown>
              <li>
                <NavLink
                  to="/events/overview"
                  exact
                  activeClassName={classes.navigation__activeDropDown}>
                  <i className="fas fa-angle-right" /> Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events/archive"
                  exact
                  activeClassName={classes.navigation__activeDropDown}>
                  <i className="fas fa-angle-right" /> Events Archive
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events/upcoming"
                  exact
                  activeClassName={classes.navigation__activeDropDown}>
                  <i className="fas fa-angle-right" /> Upcoming Events
                </NavLink>
              </li>
            </Dropdown>
          </div>

          <div className={classes.navigation__item}>
            <NavLink to="/registration" exact activeClassName={classes.navigation__active}>
              Registration
            </NavLink>
          </div>
          <div className={classes.navigation__item}>
            <NavLink
              to="/important-links"
              exact
              activeClassName={classes.navigation__active}
            >
              Important Links
            </NavLink>
          </div>
          <div
            className={
              classes.navigation__item + " " + classes.navigation__donate
            }
          >
            <Link to="/donate" exact>
              <strong className={classes.navigation__donate__strong}>
                Donate
              </strong>
            </Link>
          </div>
        </nav>
      </Aux>
    );
  }
}

export default Navigation;
