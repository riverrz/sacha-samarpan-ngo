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
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Sponser from "./components/Sponsers/Sponser/Sponser";
import AsideSocialBar from "./components/AsideSocialBar/AsideSocialBar";
import WhiteContainer from "./containers/WhiteContainer/WhiteContainer";
import Loadable from "react-loadable";

const Loading = () => (
  <WhiteContainer style={{ height: "40vh" }}>
    Loading..... Please wait
  </WhiteContainer>
);
const Register = Loadable({
  loader: () => import("./components/UserAuth/Register/Register"),
  loading: Loading
});
const Login = Loadable({
  loader: () => import("./components/UserAuth/Login/Login"),
  loading: Loading
});
const Dashboard = Loadable({
  loader: () => import("./containers/Dashboard/Dashboard"),
  loading: Loading
});
const Contact = Loadable({
  loader: () => import("./components/Contact/Contact"),
  loading: Loading
});
const EventContainer = Loadable({
  loader: () => import("./containers/EventContainer/EventContainer"),
  loading: Loading
});
const AboutContainer = Loadable({
  loader: () => import("./containers/AboutContainer/AboutContainer"),
  loading: Loading
});
const Registration = Loadable({
  loader: () => import("./components/Registration/Registration"),
  loading: Loading
});
const Internship = Loadable({
  loader: () => import("./components/Internship/Internship"),
  loading: Loading
});
const Donate = Loadable({
  loader: () => import("./components/Donate/Donate"),
  loading: Loading
});

class App extends Component {
  state = {
    viewPopUp: false,
    backdropForGallery: false,
    backdropForFrontGallery: false,
    backdropForVideo: false,
    imageToLoad: null,
    frontPageImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    allImagesNames: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg"
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
        <AsideSocialBar />
        <Switch>
          <Route path="/about" component={AboutContainer} />
          <Route path="/events" component={EventContainer} />

          <Route path="/important-links" component={Importantlinks} />
          <Route
            path="/full-gallery"
            exact
            render={() => (
              <Fullgallery invoke={event => this.backdropInvoker(event)} />
            )}
          />
          <Route path="/donate" component={Donate} />
          <Route path="/internship" component={Internship} />
          <Route path="/registration" component={Registration} />
          <Route path="/contact" component={Contact} />
          <Route path="/sponser" component={Sponser} />
          <Route path="/user/login" component={Login} />
          <Route path="/user/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />

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
