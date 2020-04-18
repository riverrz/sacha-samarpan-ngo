import React, { Component, Fragment } from "react";
import "./Navigation.css";
import Logo from "../../assets/logo.png";
import Dropdown from "../Dropdown/Dropdown";
import { Link, NavLink } from "react-router-dom";
import NavigationHeader from "./NavigationHeader/NavigationHeader";
class Navigation extends Component {
  state = {
    scrollingLock: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100 && !this.state.scrollingLock) {
      this.setState({
        scrollingLock: true,
      });
    } else if (window.scrollY < 100 && this.state.scrollingLock) {
      this.setState({
        scrollingLock: false,
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
        <NavigationHeader />
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
              <li>
                <NavLink
                  to="/about/mission-bhukh"
                  exact
                  activeClassName="navigation__activeDropDown"
                >
                  <i className="fas fa-angle-right" /> Mission Bhukh
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

          <div className="navigation__item navigation__corona">
            <Link to="/corona-help" exact>
              Corona Updates
            </Link>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
