import React, { Component } from 'react';
import classes from './App.css';
import Navigation from './components/Navigation/Navigation';
import Maintext from '../src/components/Maintext/Maintext';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navigation />
        <Maintext />
      </div>
    );
  }
}

export default App;
