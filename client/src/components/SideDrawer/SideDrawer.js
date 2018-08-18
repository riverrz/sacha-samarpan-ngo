import React, { Component, Fragment } from "react";
import "./SideDrawer.css";
import Logo from "../../assets/logo.png";

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
            <li className="sideDrawer_navList__item">Home</li>
            <li className="sideDrawer_navList__item">About</li>
            <li className="sideDrawer_navList__item">Gallery</li>
            <li className="sideDrawer_navList__item">Internship</li>
            <li className="sideDrawer_navList__item">Events</li>
            <li className="sideDrawer_navList__item">Registration</li>
            <li className="sideDrawer_navList__item">Important Links</li>
            <li className="sideDrawer_navList__item">Donate</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default SideDrawer;
