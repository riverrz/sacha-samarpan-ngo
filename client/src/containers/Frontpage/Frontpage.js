import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Carousel from "../../components/Carousel/Carousel";
import Maintext from "../../components/Maintext/Maintext";
import FrontPageGallery from "../../components/FrontPageGallery/FrontPageGallery";
import "./Frontpage.css";
import { Link } from "react-router-dom";

class Frontpage extends Component {
  render() {
    const itemsArr = ["1.JPG", "2.JPG", "3.JPG"];
    return (
      <Aux>
        <Carousel itemsArr={itemsArr} autoPlay={true} interval={12000}/>
        <div className="frontPage__frontTextAndLogoBox">
          <div className="frontPage__saffron" />
          <Maintext />
          <div className="frontPage__green" />
        </div>
        <div className="frontPage__iconRow">
          <div className="frontPage__iconRow__item">
            <span className="frontPage__iconRow__item__iconContainer">
              <img
                src="info.png"
                alt=""
                className="frontPage__iconRow__item__icon"
              />
            </span>
            <h2 className="frontPage__iconRow__item__heading">KNOW MORE</h2>
            <p className="frontPage__iconRow__item__para">
              Most Trusted NGO among youth
            </p>
            <Link exact to="/about" className="frontPage__iconRow__item__link">
              <em>Discover More</em>
            </Link>
          </div>
          <div className="frontPage__iconRow__item">
            <span className="frontPage__iconRow__item__iconContainer">
              <img
                src="help-hand.png"
                alt=""
                className="frontPage__iconRow__item__icon"
              />
            </span>
            <h2 className="frontPage__iconRow__item__heading">
              HELP & SUPPORT
            </h2>
            <p className="frontPage__iconRow__item__para">
              Donate now to help the society.
            </p>
            <Link exact to="/donate" className="frontPage__iconRow__item__link">
              <em>Donate</em>
            </Link>
          </div>
          <div className="frontPage__iconRow__item">
            <span className="frontPage__iconRow__item__iconContainer">
              <img
                src="group.png"
                alt=""
                className="frontPage__iconRow__item__icon"
              />
            </span>
            <h2 className="frontPage__iconRow__item__heading">VOLUNTEERING</h2>
            <p className="frontPage__iconRow__item__para">
              Join us as Volunteer to help needed.
            </p>
            <Link
              exact
              to="/registration"
              className="frontPage__iconRow__item__link"
            >
              <em>Apply Now</em>
            </Link>
          </div>
        </div>
        <FrontPageGallery invokeBackdrop={event => this.props.invoke(event)} imgArr={this.props.imgArr} />
      </Aux>
    );
  }
}

export default Frontpage;
