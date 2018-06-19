import React from "react";
import classes from "./GalleryItem.css";

const galleryItem = props => {
  return <div className={classes.galleryItem} onClick={props.invokeBackdrop}>
      <img src={`/images/${props.imageName}`} alt="Gallery Item" />
      <p>{props.text}</p>
    </div>;
};

export default galleryItem;
