import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Carousel from "../../components/Carousel/Carousel";
import Maintext from "../../components/Maintext/Maintext";
import FrontPageGallery from '../../components/FrontPageGallery/FrontPageGallery';
import classes from "./Frontpage.css";
import { Link } from "react-router-dom";

class Frontpage extends Component {
  render() {
    return (
      <Aux>
        <Carousel />
        <div className={classes.frontPage__frontTextAndLogoBox}>
          <div className={classes.frontPage__saffron} />
          <Maintext />
          <div className={classes.frontPage__green} />
        </div>
        <div className={classes.frontPage__iconRow}>
          <div className={classes["frontPage__iconRow__item"]}>
            <span className={classes["frontPage__iconRow__item__iconContainer"]}>
              <img
                src="info.png"
                alt=""
                className={classes["frontPage__iconRow__item__icon"]}
              />
            </span>
            <h2 className={classes["frontPage__iconRow__item__heading"]}>KNOW MORE</h2>
            <p className={classes["frontPage__iconRow__item__para"]}>
              Most Trusted NGO among youth
            </p>
            <Link exact to="/about" className={classes["frontPage__iconRow__item__link"]}>
              <em>Discover More</em>
            </Link>
          </div>
          <div className={classes["frontPage__iconRow__item"]}>
            <span className={classes["frontPage__iconRow__item__iconContainer"]}>
              <img
                src="help-hand.png"
                alt=""
                className={classes["frontPage__iconRow__item__icon"]}
              />
            </span>
            <h2 className={classes["frontPage__iconRow__item__heading"]}>
              HELP & SUPPORT
            </h2>
            <p className={classes["frontPage__iconRow__item__para"]}>
              Donate now to help the society.
            </p>
            <Link exact to="/donate" className={classes["frontPage__iconRow__item__link"]}>
              <em>Donate</em>
            </Link>
          </div>
          <div className={classes["frontPage__iconRow__item"]}>
            <span className={classes["frontPage__iconRow__item__iconContainer"]}>
              <img
                src="group.png"
                alt=""
                className={classes["frontPage__iconRow__item__icon"]}
              />
            </span>
            <h2 className={classes["frontPage__iconRow__item__heading"]}>VOLUNTEERING</h2>
            <p className={classes["frontPage__iconRow__item__para"]}>
              Join us as Volunteer to help needed.
            </p>
            <Link
              exact
              to="/registration"
              className={classes["frontPage__iconRow__item__link"]}
            >
              <em>Apply Now</em>
            </Link>
          </div>
        </div>
        <FrontPageGallery invokeBackdrop={event => this.props.invoke(event)}  />
      </Aux>
    );
  }
}

export default Frontpage;
