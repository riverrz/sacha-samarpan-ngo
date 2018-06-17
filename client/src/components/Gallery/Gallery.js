import React, { Component } from "react";
import classes from "./Gallery.css";
import GalleryItem from "./GalleryItem/GalleryItem";

class Gallery extends Component {
  state={
    images: [
      {
        name:"2.JPG",
        text: "test1"
      },
      {
        name:"2.JPG",
        text: "test2"
      },
      {
        name:"2.JPG",
        text: "test"
      },
      {
        name:"2.JPG",
        text: "test"
      },
      {
        name:"2.JPG",
        text: "test"
      },
      {
        name:"2.JPG",
        text: "test"
      },
      {
        name:"2.JPG",
        text: "test"
      },
      {
        name:"2.JPG",
        text: "test"
      },
    ]
  }
  render() {
    const allGalleryItems = this.state.images.map((data,i)=> {
      return <GalleryItem imageName={data.name} text={data.text} key={i}/>
    })
    return (
      <div className={classes.galleryContainer}>
        <h1 className={classes.gallery__headingPrimary}>
          Our Precious <span>Moments</span>
        </h1>
        <div className={classes.gallery}>
          {allGalleryItems}
        </div>
      </div>
    );
  }
}
export default Gallery;
