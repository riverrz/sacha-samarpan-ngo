import React, { Component } from 'react';
import classes from './App.css';
import Navigation from './components/Navigation/Navigation';
import Maintext from './components/Maintext/Maintext';
import Carousel from './components/Carousel/Carousel';
import Gallery from './components/Gallery/Gallery';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navigation />
        <Carousel />
        <Maintext />
        <Gallery />
      </div>
    );
  }
}

export default App;
