import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import leftLogo from "./assets/Icons/charity-1.png";
import rightLogo from "./assets/Icons/praying.png";
import Frontpage from "./containers/Frontpage/Frontpage";
import Importantlinks from "./components/Importantlinks/Importantlinks";
import Fullgallery from "./containers/Fullgallery/Fullgallery";
import Donate from "./components/Donate/Donate";
import Internship from "./components/Internship/Internship";
import Registration from "./components/Registration/Registration";
import AboutContainer from "./containers/AboutContainer/AboutContainer";
import EventContainer from "./containers/EventContainer/EventContainer";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Contact from "./components/Contact/Contact";
import Sponser from "./components/Sponsers/Sponser/Sponser";
import AsideSocialBar from "./components/AsideSocialBar/AsideSocialBar";
import IndividualEvent from "./components/Event/IndividualEvent/IndividualEvent";
import Modal from "./components/Modal/Modal";
import Loadable from "react-loadable";
import Loading from "./components/Loading/Loading";
import CoronaHelp from "./components/CoronaHelp";

const Register = Loadable({
  loader: () => import("./components/UserAuth/Register/Register"),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import("./components/UserAuth/Login/Login"),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import("./containers/Dashboard/Dashboard"),
  loading: Loading,
});

class App extends Component {
  state = {
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
      "16.jpg",
      "17.jpeg",
      "18.jpeg",
      "19.jpeg",
      "21.jpeg",
      "22.jpeg",
    ],
  };
  render() {
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
        <Modal />
        <AsideSocialBar />
        <Switch>
          <Route path="/about" component={AboutContainer} />
          <Route path="/events" component={EventContainer} />

          <Route path="/important-links" component={Importantlinks} />
          <Route
            path="/full-gallery"
            exact
            render={() => (
              <Fullgallery invoke={(event) => this.backdropInvoker(event)} />
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
          <Route path="/event/:eventId" component={IndividualEvent} />
          <Route path="/corona-help" component={CoronaHelp} />
          <Route
            path="/"
            render={(props) => (
              <Frontpage
                imgArr={this.state.frontPageImages}
                invoke={(event) => this.backdropInvoker(event)}
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
