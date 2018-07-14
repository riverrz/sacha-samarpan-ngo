import React from "react";
import "./GalleryItem.css";

const galleryItem = props => {
  let style;
  if (props.width) {
    style = {
      width: props.width,
      height: props.height
    };
  }
  return (
    <div className="galleryItem" onClick={props.invokeBackdrop} style={style}>
      <img
        src={`/images/${props.imageName}`}
        alt="Gallery Item"
        id={props.id}
      />
    </div>
  );
};

export default galleryItem;
