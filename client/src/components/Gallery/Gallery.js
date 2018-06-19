import React, { Component } from "react";
import classes from "./Gallery.css";
import GalleryItem from "./GalleryItem/GalleryItem";
import { Link } from "react-router-dom";

class Gallery extends Component {
  state = {
    images: [
      {
        name: "2.JPG",
        text: "test1"
      },
      {
        name: "2.JPG",
        text: "test2"
      },
      {
        name: "2.JPG",
        text: "test"
      },
      {
        name: "2.JPG",
        text: "test"
      },
      {
        name: "2.JPG",
        text: "test"
      },
      {
        name: "2.JPG",
        text: "test"
      },
      {
        name: "2.JPG",
        text: "test"
      },
      {
        name: "2.JPG",
        text: "test"
      }
    ]
  };
  render() {
    const allGalleryItems = this.state.images.map((data, i) => {
      return <GalleryItem imageName={data.name} text={data.text} key={i} invokeBackdrop={this.props.invokeBackdrop}/>;
    });
    return (
      <div className={classes.galleryContainer}>
        <h1 className={classes.gallery__headingPrimary}>
          Our Precious <span>Moments</span>
        </h1>
        <div className={classes.gallery}>{allGalleryItems}</div>
        <button className={classes.galleryLink}>
          <Link to="/gallery" exact>
            View All Photos <span className={classes.arrow}>→</span>
          </Link>
        </button>
      </div>
    );
  }
}
export default Gallery;
