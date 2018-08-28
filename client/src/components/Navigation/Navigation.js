import React, { Component, Fragment } from "react";

import "./Navigation.css";
import Logo from "../../assets/logo.png";
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
    let navigationClass = "navigation--notFixed";
    if (this.state.scrollingLock) {
      navigationClass = "navigation--fixed";
    }
    return (
      <Fragment>
        <div className="nav">
          <div className="nav__contact">
            <div className="nav__contact__number">
              <i className="fas fa-phone" />{" "}
              <a className="nav_contact__phoneLink" href="tel:+919211458806">
                +91 9211458806
              </a>
            </div>
            <div className="nav__contact__email">
              <a
                href="mailto:sacchasamarpan@yahoo.com"
                className="nav__contact__emailLink"
              >
                <i className="fas fa-envelope" /> sacchasamarpan@yahoo.com
              </a>
            </div>
            <div className="nav__contact__social">
              <a
                href="https://www.facebook.com/SacchaSamarpanNGO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://www.twitter.com/SacchaSamarpan1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.instagram.com/sacchasamarpan_ngo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>
        <nav className={`navigation ${navigationClass}`}>
          <div className="navigation__item navigation__logoBox">
            <img className="navigation__logo" src={Logo} alt="Logo" />
          </div>
          <div className="navigation__item">
            <NavLink to="/" exact activeClassName="navigation__active">
              Home
            </NavLink>
          </div>
          <div className="navigation__item">
            <NavLink to="/about" activeClassName="navigation__active">
              About
            </NavLink>
            <Dropdown>
              <li>
                <NavLink
                  to="/about"
                  exact
                  activeClassName="navigation__activeDropDown"
                >
                  <i className="fas fa-angle-right" /> Overview
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about/founders"
                  exact
                  activeClassName="navigation__activeDropDown"
                >
                  <i className="fas fa-angle-right" /> Founders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about/advisors"
                  exact
                  activeClassName="navigation__activeDropDown"
                >
                  <i className="fas fa-angle-right" /> Advisors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about/team"
                  exact
                  activeClassName="navigation__activeDropDown"
                >
                  <i className="fas fa-angle-right" /> Our Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about/issues"
                  exact
                  activeClassName="navigation__activeDropDown"
                >
                  <i className="fas fa-angle-right" /> Issues & Views
                </NavLink>
              </li>
            </Dropdown>
          </div>

          <div className="navigation__item">
            <NavLink
              to="/full-gallery"
              exact
              activeClassName="navigation__active"
            >
              Gallery
            </NavLink>
          </div>
          <div className="navigation__item">
            <NavLink
              to="/internship"
              exact
              activeClassName="navigation__active"
            >
              Internship
            </NavLink>
          </div>

          <div className="navigation__item">
            <NavLink to="/events" activeClassName="navigation__active">
              Events
            </NavLink>
            <Dropdown>
              <li>
                <NavLink
                  to="/events"
                  exact
                  activeClassName="navigation__activeDropDown"
                >
                  <i className="fas fa-angle-right" /> Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events/archive"
                  exact
                  activeClassName="navigation__activeDropDown"
                >
                  <i className="fas fa-angle-right" /> Events Archive
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events/upcoming"
                  exact
                  activeClassName="navigation__activeDropDown"
                >
                  <i className="fas fa-angle-right" /> Upcoming Events
                </NavLink>
              </li>
            </Dropdown>
          </div>

          <div className="navigation__item">
            <NavLink
              to="/registration"
              exact
              activeClassName="navigation__active"
            >
              Registration
            </NavLink>
          </div>
          <div className="navigation__item">
            <NavLink
              to="/important-links"
              exact
              activeClassName="navigation__active"
            >
              Important Links
            </NavLink>
          </div>
          <div className="navigation__item navigation__donate">
            <Link to="/donate" exact>
              <strong className="navigation__donate__strong">Donate</strong>
            </Link>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
