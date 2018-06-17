import React, { Component } from "react";
import { Route } from "react-router-dom";
import classes from "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import leftLogo from "./assets/Icons/charity-1.png";
import rightLogo from "./assets/Icons/praying.png";
import Frontpage from "./containers/Frontpage/Frontpage";
import About from "./components/About/About";
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.backSide}>
          <div className={classes.backSide__logoBox}>
            <img
              src={leftLogo}
              alt="charity-logo-1"
              className={classes.backSide__logo}
            />
          </div>
          <div className={classes.backSide__logoBox}>
            <img
              src={rightLogo}
              alt="charity-logo-1"
              className={classes.backSide__logo}
            />
          </div>
        </div>
        <Navigation />
        <Route path="/" exact component={Frontpage} />
        <Route path="/about" exact component={About} />
        <Footer />
      </div>
    );
  }
}

export default App;
