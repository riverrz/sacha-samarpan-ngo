import React, { Component } from "react";
import classes from "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Maintext from "./components/Maintext/Maintext";
import Carousel from "./components/Carousel/Carousel";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import leftLogo from "./assets/Icons/charity-1.png";
import rightLogo from "./assets/Icons/praying.png";
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.backSide}>
          <div className={classes.backSide__logoBox}>
            <img src={leftLogo} alt="charity-logo-1" className={classes.backSide__logo}/>
          </div>
          <div className={classes.backSide__logoBox}>
            <img src={rightLogo} alt="charity-logo-1" className={classes.backSide__logo}/>
          </div>
        </div>
        <Navigation />
        <Carousel />
        <div className={classes.frontTextAndLogoBox}>
          <div className={classes.saffron} />
          <Maintext />
          <div className={classes.green} />
        </div>
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
