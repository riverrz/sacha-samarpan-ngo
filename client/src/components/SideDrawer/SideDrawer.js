import React, { Component, Fragment } from "react";
import "./SideDrawer.css";
import Logo from "../../assets/logo.png";
import InnerList from "./InnerList/InnerList";
import { Link } from "react-router-dom";

class SideDrawer extends Component {
  state = {
    show: false
  };
  backdropCloseHandler = () => {
    this.setState({
      show: false
    });
  };
  backdropOpenHandler = () => {
    this.setState({
      show: true
    });
  };
  handleScrolling() {
    if (this.state.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  render() {
    this.handleScrolling();
    let sideDrawerClass = "sideDrawer--hidden";
    let backdropClass = "sideDrawer__backdrop--hidden";
    if (this.state.show) {
      sideDrawerClass = "sideDrawer--show";
      backdropClass = "sideDrawer__backdrop--show";
    }
    return (
      <Fragment>
        <div
          className="sideDrawer__toggleIcon"
          onClick={this.backdropOpenHandler}
        >
          <div />
          <div />
          <div />
        </div>
        <div
          className={`sideDrawer__backdrop ${backdropClass}`}
          onClick={this.backdropCloseHandler}
        />
        <div className={`sideDrawer__container ${sideDrawerClass}`}>
          <div className="sideDrawer__logoContainer">
            <img
              src={Logo}
              alt="Saccha Samarpan"
              className="sideDrawer__logo"
            />
          </div>
          <ul className="sideDrawer__navList">
            <li className="sideDrawer_navList__item">
              <Link
                className="sideDrawer__navLinks"
                to="/"
                exact
                onClick={this.backdropCloseHandler}
              >
                Home
              </Link>
            </li>
            <li className="sideDrawer_navList__item">
              <InnerList heading="About">
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/about"
                    onClick={this.backdropCloseHandler}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/about/founders"
                    onClick={this.backdropCloseHandler}
                  >
                    Founders
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/about/advisors"
                    onClick={this.backdropCloseHandler}
                  >
                    Advisors
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/about/team"
                    onClick={this.backdropCloseHandler}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/about/issues"
                    onClick={this.backdropCloseHandler}
                  >
                    Issues & Views
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/about/mission-bhukh"
                    onClick={this.backdropCloseHandler}
                  >
                    Mission Bhukh
                  </Link>
                </li>
              </InnerList>
            </li>
            <li className="sideDrawer_navList__item">
              <Link
                className="sideDrawer__navLinks"
                exact
                to="/full-gallery"
                onClick={this.backdropCloseHandler}
              >
                Gallery
              </Link>
            </li>
            <li className="sideDrawer_navList__item">
              <Link
                className="sideDrawer__navLinks"
                exact
                to="/internship"
                onClick={this.backdropCloseHandler}
              >
                Internship
              </Link>
            </li>
            <li className="sideDrawer_navList__item">
              <InnerList heading="Events">
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/events"
                    onClick={this.backdropCloseHandler}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/events/archive"
                    onClick={this.backdropCloseHandler}
                  >
                    Events Archives
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/events/upcoming"
                    onClick={this.backdropCloseHandler}
                  >
                    Upcoming Events
                  </Link>
                </li>
              </InnerList>
            </li>
            <li className="sideDrawer_navList__item">
              <Link
                className="sideDrawer__navLinks"
                exact
                to="/registration"
                onClick={this.backdropCloseHandler}
              >
                Registration
              </Link>
            </li>
            <li className="sideDrawer_navList__item">
              <Link
                className="sideDrawer__navLinks"
                exact
                to="/important-links"
                onClick={this.backdropCloseHandler}
              >
                Important Links
              </Link>
            </li>
            <li className="sideDrawer_navList__item">
              <Link
                className="sideDrawer__navLinks"
                exact
                to="/donate"
                onClick={this.backdropCloseHandler}
              >
                Donate
              </Link>
            </li>
            <li className="sideDrawer_navList__item sideDrawer_navList__item--corona">
              <Link
                className="sideDrawer__navLinks"
                exact
                to="/corona-help"
                onClick={this.backdropCloseHandler}
              >
                Corona Help
              </Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default SideDrawer;
