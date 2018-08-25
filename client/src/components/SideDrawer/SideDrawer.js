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
  render() {
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
              <Link className="sideDrawer__navLinks" to="/" exact>
                Home
              </Link>
            </li>
            <li className="sideDrawer_navList__item">
              <InnerList heading="About">
                <li>
                  <Link className="sideDrawer__navLinks" exact to="/about">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/about/founders"
                  >
                    Founders
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/about/advisors"
                  >
                    Advisors
                  </Link>
                </li>
                <li>
                  <Link className="sideDrawer__navLinks" exact to="/about/team">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/about/issues"
                  >
                    Issues & Views
                  </Link>
                </li>
              </InnerList>
            </li>
            <li className="sideDrawer_navList__item">
              <Link className="sideDrawer__navLinks" exact to="/full-gallery">
                Gallery
              </Link>
            </li>
            <li className="sideDrawer_navList__item">
              <Link className="sideDrawer__navLinks" exact to="/internship">
                Internship
              </Link>
            </li>
            <li className="sideDrawer_navList__item">
              <InnerList heading="Events">
                <li>
                  <Link className="sideDrawer__navLinks" exact to="/events">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/events/archive"
                  >
                    Events Archives
                  </Link>
                </li>
                <li>
                  <Link
                    className="sideDrawer__navLinks"
                    exact
                    to="/events/upcoming"
                  >
                    Upcoming Events
                  </Link>
                </li>
              </InnerList>
            </li>
            <li className="sideDrawer_navList__item">
              <Link className="sideDrawer__navLinks" exact to="/registration">
                Registration
              </Link>
            </li>
            <li className="sideDrawer_navList__item">
              <Link
                className="sideDrawer__navLinks"
                exact
                to="/important-links"
              >
                Important Links
              </Link>
            </li>
            <li className="sideDrawer_navList__item">
              <Link className="sideDrawer__navLinks" exact to="/donate">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default SideDrawer;
