import React, { Component } from "react";
import classes from "./Gallery.css";
import GalleryItem from "./GalleryItem/GalleryItem";
import { Link } from "react-router-dom";

class Gallery extends Component {
  state = {
    images: [
      {
        name: "2.JPG"
      },
      {
        name: "1.JPG"
      },
      {
        name: "3.JPG"
      },
      {
        name: "2.JPG"
      },
      {
        name: "3.JPG"
      },
      {
        name: "2.JPG"
      },
      {
        name: "1.JPG"
      },
      {
        name: "1.JPG"
      }
    ]
  };
  render() {
    const allGalleryItems = this.state.images.map((data, i) => {
      return <GalleryItem imageName={data.name} key={i} invokeBackdrop={(event)=> this.props.invokeBackdrop(event)}/>;
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
