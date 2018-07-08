import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import classes from "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import leftLogo from "./assets/Icons/charity-1.png";
import rightLogo from "./assets/Icons/praying.png";
import Frontpage from "./containers/Frontpage/Frontpage";
import Importantlinks from "./components/Importantlinks/Importantlinks";
import Backdrop from "./containers/Backdrop/Backdrop";
import Fullgallery from "./containers/Fullgallery/Fullgallery";
import Donate from "./components/Donate/Donate";
import Internship from "./components/Internship/Internship";
import Registration from "./components/Registration/Registration";
import AboutContainer from './containers/AboutContainer/AboutContainer';
import EventContainer from './containers/EventContainer/EventContainer';
class App extends Component {
  state = {
    backdropWillShow: false,
    imageToLoad: null
  };
  backdropRemover = () => {
    this.setState({
      backdropWillShow: false,
      imageLinkToLoad: null
    });
  };
  backdropInvoker = event => {
    this.setState({
      backdropWillShow: true,
      imageLinkToLoad: event.target.src
    });
  };
  render() {
    let backdrop = null;
    if (this.state.backdropWillShow) {
      backdrop = (
        <Backdrop
          clicked={this.backdropRemover}
          image={this.state.imageLinkToLoad}
          exitClicked={this.backdropRemover}
        />
      );
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
        <Switch>
          <Route path="/about"  component={AboutContainer} />
          <Route path="/events"  component={EventContainer} />

          <Route path="/important-links" exact component={Importantlinks} />
          <Route
            path="/full-gallery"
            exact
            render={() => (
              <Fullgallery invoke={event => this.backdropInvoker(event)} />
            )}
          />
          <Route path="/donate" exact component={Donate} />
          <Route path="/internship" exact component={Internship} />
          <Route path="/registration" exact component={Registration} />
          
          <Route
            path="/"
            render={() => (
              <Frontpage invoke={event => this.backdropInvoker(event)} />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
