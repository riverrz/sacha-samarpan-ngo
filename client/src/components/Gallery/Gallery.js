import React, { Component } from "react";
import classes from "./Gallery.css";
import GalleryItem from "./GalleryItem/GalleryItem";
import { Link } from "react-router-dom";

class Gallery extends Component {
  state = {
    images: [
      {
        name: "1.JPG"
      },
      {
        name: "2.JPG"
      },
      {
        name: "3.JPG"
      },
      {
        name: "4.JPG"
      },
      {
        name: "5.JPG"
      },
      {
        name: "6.JPG"
      },
      {
        name: "7.JPG"
      },
      {
        name: "8.JPG"
      },
      {
        name: "9.JPG"
      },
      {
        name: "10.JPG"
      },
      {
        name: "11.JPG"
      },
      {
        name: "12.JPG"
      },
      {
        name: "13.JPG"
      },
      {
        name: "14.JPG"
      },
      {
        name: "15.JPG"
      },
      {
        name: "16.JPG"
      }
    ]
  };
  render() {
    const allGalleryItems = this.state.images.map((data, i) => {
      if (this.props.limit && i >= this.props.limit) {
        return null;
      }
      return (
        <GalleryItem
          imageName={data.name}
          key={i}
          invokeBackdrop={event => this.props.invokeBackdrop(event)}
        />
      );
    });
    let possibleButton = (
      <button className={classes.galleryLink}>
        <Link to="/full-gallery" exact>
          View All Photos <span className={classes.arrow}>→</span>
        </Link>
      </button>
    );
    if (!this.props.limit) {
      console.log("Yes")
      possibleButton = null;
    }
    return (
      <div className={classes.galleryContainer}>
        <h1 className={classes.gallery__headingPrimary}>
          Our Precious <span>Moments</span>
        </h1>
        <div className={classes.gallery}>{allGalleryItems}</div>
        {possibleButton}
      </div>
    );
  }
}
export default Gallery;
