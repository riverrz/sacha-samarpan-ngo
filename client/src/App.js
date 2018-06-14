import React, { Component } from 'react';
import classes from './App.css';
import Navigation from './components/Navigation/Navigation';
import Maintext from './components/Maintext/Maintext';
import Carousel from './components/Carousel/Carousel';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Backside from './components/Backside/Backside';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Backside />
        <Navigation />
        <Carousel />
        <Maintext />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
