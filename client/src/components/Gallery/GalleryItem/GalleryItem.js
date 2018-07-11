import React from "react";
import classes from "./GalleryItem.css";

const galleryItem = props => {
  let style;
  if (props.width) {
    style={
      width: props.width,
      height: props.height
    }
  }
  return <div className={classes.galleryItem} onClick={props.invokeBackdrop} style={style}>
      <img src={`/images/${props.imageName}`} alt="Gallery Item" />
    </div>;
};

export default galleryItem;
