import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
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
import AboutContainer from "./containers/AboutContainer/AboutContainer";
import EventContainer from "./containers/EventContainer/EventContainer";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Contact from "./components/Contact/Contact";
import Sponser from "./components/Sponsers/Sponser/Sponser";

class App extends Component {
  state = {
    viewPopUp: false,
    backdropForGallery: false,
    backdropForFrontGallery: false,
    backdropForVideo: false,
    imageToLoad: null,
    frontPageImages: ["1.JPG", "2.JPG", "3.JPG", "4.JPG"],
    allImagesNames: [
      "1.JPG",
      "2.JPG",
      "3.JPG",
      "4.JPG",
      "5.JPG",
      "6.JPG",
      "7.JPG",
      "8.JPG",
      "9.JPG",
      "10.JPG",
      "11.JPG",
      "12.JPG",
      "13.JPG",
      "14.JPG",
      "15.JPG",
      "16.JPG"
    ]
  };
  backdropRemover = () => {
    this.setState({
      backdropForGallery: false,
      backdropForFrontGallery: false,
      imageLinkToLoad: null,
      viewPopUp: false,
      backdropForVideo: false
    });
  };
  backdropInvoker = event => {
    if (event.target.id === "overlay") {
      this.setState({
        backdropForVideo: true
      });
    } else if (event.target.id === "in-gallery") {
      this.setState({
        backdropForGallery: true,
        imageLinkToLoad: event.target.src
      });
    } else if (event.target.id === "in-frontGallery") {
      this.setState({
        backdropForFrontGallery: true,
        imageLinkToLoad: event.target.src
      });
    }
  };
  componentWillMount() {
    let visited = sessionStorage["alreadyVisited"];
    if (visited) {
      this.setState({
        viewPopUp: false
      });
    } else {
      this.setState({
        viewPopUp: true
      });
      sessionStorage["alreadyVisited"] = true;
    }
  }
  render() {
    let backdrop = null;
    if (this.state.backdropForGallery) {
      backdrop = (
        <Backdrop
          clicked={this.backdropRemover}
          image={this.state.imageLinkToLoad}
          exitClicked={this.backdropRemover}
          for="gallery"
          itemsArr={this.state.allImagesNames}
        />
      );
    } else if (this.state.backdropForFrontGallery) {
      backdrop = (
        <Backdrop
          clicked={this.backdropRemover}
          image={this.state.imageLinkToLoad}
          exitClicked={this.backdropRemover}
          for="gallery"
          itemsArr={this.state.allImagesNames.slice(0, 4)}
        />
      );
    } else if (this.state.viewPopUp) {
      backdrop = (
        <Backdrop
          clicked={this.backdropRemover}
          image={this.state.imageLinkToLoad}
          exitClicked={this.backdropRemover}
          for="popup"
        />
      );
    } else if (this.state.backdropForVideo) {
      backdrop = (
        <Backdrop
          clicked={this.backdropRemover}
          exitClicked={this.backdropRemover}
          for="video"
        />
      );
    }
    return (
      <div className="App">
        <div className="app__backSide">
          <div className="app__backSide__logoBox">
            <img
              src={leftLogo}
              alt="charity-logo-1"
              className="app__backSide__logo"
            />
          </div>
          <div className="app__backSide__logoBox">
            <img
              src={rightLogo}
              alt="charity-logo-1"
              className="app__backSide__logo"
            />
          </div>
        </div>
        <SideDrawer />
        <Navigation />
        {backdrop}
        <Switch>
          <Route path="/about" component={AboutContainer} />
          <Route path="/events" component={EventContainer} />

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
          <Route path="/contact" exact component={Contact} />
          <Route path="/sponser" component={Sponser} />
          <Route
            path="/"
            render={props => (
              <Frontpage
                imgArr={this.state.frontPageImages}
                invoke={event => this.backdropInvoker(event)}
                {...props}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
