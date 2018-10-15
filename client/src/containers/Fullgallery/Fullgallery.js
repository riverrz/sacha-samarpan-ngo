import React, { Component } from "react";
import "./Fullgallery.css";
import Gallery from "../../components/Gallery/Gallery";

class Fullgallery extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="fullGallery">
        <Gallery isFull={true} />
      </div>
    );
  }
}

export default Fullgallery;
