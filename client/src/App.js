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
import Founders from './components/Founders/Founders';
import Fullgallery from './containers/Fullgallery/Fullgallery';
import Donate from './components/Donate/Donate';
import Internship from './components/Internship/Internship';
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
    return <div className={classes.App}>
        <div className={classes.backSide}>
          <div className={classes.backSide__logoBox}>
            <img src={leftLogo} alt="charity-logo-1" className={classes.backSide__logo} />
          </div>
          <div className={classes.backSide__logoBox}>
            <img src={rightLogo} alt="charity-logo-1" className={classes.backSide__logo} />
          </div>
        </div>
        <Navigation />
        {backdrop}
        <Route path="/" exact render={() => <Frontpage invoke={event => this.backdropInvoker(event)} />} />
        <Route path="/about" exact component={About} />
        <Route path="/issues" exact component={IssuesAndViews} />
        <Route path="/important-links" exact component={Importantlinks} />
        <Route path="/founders" exact component={Founders} />
        <Route path="/full-gallery" exact render={() => <Fullgallery invoke={event => this.backdropInvoker(event)} />} />
        <Route path="/donate" exact component={Donate} />
        <Route path="/internship" exact component={Internship} />
        <Footer />
      </div>;
  }
}

export default App;
