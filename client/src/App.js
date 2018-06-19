import React, { Component } from "react";
import { Route } from "react-router-dom";
import classes from "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import leftLogo from "./assets/Icons/charity-1.png";
import rightLogo from "./assets/Icons/praying.png";
import Frontpage from "./containers/Frontpage/Frontpage";
import About from "./components/About/About";
import IssuesAndViews from "./components/IssuesAndViews/IssuesAndViews";
import Importantlinks from "./components/Importantlinks/Importantlinks";
import Backdrop from "./containers/Backdrop/Backdrop";
class App extends Component {
  state = {
    isBackdropShowing: false
  };
  backdropRemover = () => {
    this.setState({
      isBackdropShowing: false
    });
  };
  backdropInvoker = () => {
    this.setState({
      isBackdropShowing: true
    });
  };
  render() {
    let backdrop = null;
    if (this.state.isBackdropShowing) {
      backdrop = <Backdrop clicked={this.backdropRemover} />;
    }
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
        {backdrop}
        <Route path="/" exact render={()=> <Frontpage invoke={this.backdropInvoker}/>} />
        <Route path="/about" exact component={About} />
        <Route path="/issues" exact component={IssuesAndViews} />
        <Route path="/important-links" exact component={Importantlinks} />
        <Footer />
      </div>
    );
  }
}

export default App;
