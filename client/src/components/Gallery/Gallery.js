import React from "react";
import classes from "./Gallery.css";
import GalleryItem from "./GalleryItem/GalleryItem";
const gallery = props => {
  return (
    <div className={classes.galleryContainer}>
      <h1 className={classes.gallery__headingPrimary}>
        Our Precious <span>Moments</span>
      </h1>
      <div className={classes.gallery}>
        <GalleryItem imageName="2.JPG" text="test" />
        <GalleryItem imageName="2.JPG" text="test" />
        <GalleryItem imageName="2.JPG" text="test" />
        <GalleryItem imageName="2.JPG" text="test" />
        <GalleryItem imageName="2.JPG" text="test" />
        <GalleryItem imageName="2.JPG" text="test" />
        <GalleryItem imageName="2.JPG" text="test" />
        <GalleryItem imageName="2.JPG" text="test" />
      </div>
    </div>
  );
};

export default gallery;
