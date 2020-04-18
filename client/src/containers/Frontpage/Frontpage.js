import React, { Fragment, Component } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Maintext from "../../components/Maintext/Maintext";
import FrontPageGallery from "../../components/FrontPageGallery/FrontPageGallery";
import Sponsers from "../../components/Sponsers/Sponsers";
import { Fade } from "react-reveal";
import "./Frontpage.css";

class Frontpage extends Component {
  state = {
    itemsArr: [
      "17.jpeg",
      "19.jpeg",
      "20.jpeg",
      "21.jpeg",
      "9.jpg",
      "3.jpg",
      "7.jpg",
      "16.jpg",
      "6.jpg",
      "11.jpg",
    ],
  };
  onClickHandler = (path) => {
    this.props.history.push(path);
  };
  render() {
    return (
      <Fragment>
        <Carousel
          itemsArr={this.state.itemsArr}
          autoPlay={true}
          interval={12000}
        />
        <div className="frontPage__frontTextAndLogoBox">
          <div className="frontPage__saffron" />
          <Maintext />
          <div className="frontPage__green" />
        </div>
        <div className="frontPage__iconRow">
          <div
            className="frontPage__iconRow__item"
            onClick={() => this.onClickHandler("/about")}
          >
            <span className="frontPage__iconRow__item__iconContainer">
              <img
                src="info.png"
                alt=""
                className="frontPage__iconRow__item__icon"
              />
            </span>
            <Fade bottom>
              <h2 className="frontPage__iconRow__item__heading">KNOW MORE</h2>
              <p className="frontPage__iconRow__item__para">
                Most Trusted NGO among youth
              </p>
            </Fade>
            <span className="frontPage__iconRow__item__link">
              <em>Discover More</em>
            </span>
          </div>
          <div
            className="frontPage__iconRow__item"
            onClick={() => this.onClickHandler("/donate")}
          >
            <span className="frontPage__iconRow__item__iconContainer">
              <img
                src="help-hand.png"
                alt=""
                className="frontPage__iconRow__item__icon"
              />
            </span>
            <Fade bottom>
              <h2 className="frontPage__iconRow__item__heading">
                HELP & SUPPORT
              </h2>
              <p className="frontPage__iconRow__item__para">
                Donate now to help the society.
              </p>
            </Fade>
            <span className="frontPage__iconRow__item__link">
              <em>Donate</em>
            </span>
          </div>
          <div
            className="frontPage__iconRow__item"
            onClick={() => this.onClickHandler("/registration")}
          >
            <span className="frontPage__iconRow__item__iconContainer">
              <img
                src="group.png"
                alt=""
                className="frontPage__iconRow__item__icon"
              />
            </span>
            <Fade bottom>
              <h2 className="frontPage__iconRow__item__heading">
                VOLUNTEERING
              </h2>
              <p className="frontPage__iconRow__item__para">
                Join us as Volunteer to help needed.
              </p>
            </Fade>
            <span className="frontPage__iconRow__item__link">
              <em>Apply Now</em>
            </span>
          </div>
        </div>
        <FrontPageGallery imgArr={this.props.imgArr} />
        <Sponsers />
      </Fragment>
    );
  }
}

export default Frontpage;
