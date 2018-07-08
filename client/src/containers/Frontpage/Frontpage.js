import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Carousel from "../../components/Carousel/Carousel";
import Maintext from "../../components/Maintext/Maintext";
import Gallery from "../../components/Gallery/Gallery";
import classes from "./Frontpage.css";
import { Link } from "react-router-dom";

class Frontpage extends Component {
  render() {
    return (
      <Aux>
        <Carousel />
        <div className={classes.frontTextAndLogoBox}>
          <div className={classes.saffron} />
          <Maintext />
          <div className={classes.green} />
        </div>
        <div className={classes.iconRow}>
          <div className={classes["iconRow__item"]}>
            <span className={classes["iconRow__item__iconContainer"]}>
              <img
                src="group-1.png"
                alt=""
                className={classes["iconRow__item__icon"]}
              />
            </span>
            <h2 className={classes["iconRow__item__heading"]}>KNOW MORE</h2>
            <p className={classes["iconRow__item__para"]}>
              Most Trusted NGO among youth
            </p>
            <Link exact to="/about" className={classes["iconRow__item__link"]}>
              <em>Discover More</em>
            </Link>
          </div>
          <div className={classes["iconRow__item"]}>
            <span className={classes["iconRow__item__iconContainer"]}>
              <img
                src="group-1.png"
                alt=""
                className={classes["iconRow__item__icon"]}
              />
            </span>
            <h2 className={classes["iconRow__item__heading"]}>
              HELP & SUPPORT
            </h2>
            <p className={classes["iconRow__item__para"]}>
              Donate now to help the society.
            </p>
            <Link exact to="/donate" className={classes["iconRow__item__link"]}>
              <em>Donate</em>
            </Link>
          </div>
          <div className={classes["iconRow__item"]}>
            <span className={classes["iconRow__item__iconContainer"]}>
              <img
                src="group-1.png"
                alt=""
                className={classes["iconRow__item__icon"]}
              />
            </span>
            <h2 className={classes["iconRow__item__heading"]}>VOLUNTEERING</h2>
            <p className={classes["iconRow__item__para"]}>
              Join us as Volunteer to help needed.
            </p>
            <Link
              exact
              to="/registration"
              className={classes["iconRow__item__link"]}
            >
              <em>Apply Now</em>
            </Link>
          </div>
        </div>
        <Gallery invokeBackdrop={event => this.props.invoke(event)} limit="8" />
      </Aux>
    );
  }
}

export default Frontpage;
