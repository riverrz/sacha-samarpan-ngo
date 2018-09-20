import React from "react";
import "./GalleryItem.css";
import { Zoom } from "react-reveal";
const galleryItem = props => {
  let style;
  if (props.width) {
    style = {
      width: props.width,
      height: props.height
    };
  }
  let itemClass = "galleryItem";
  if (props.isGridItem) {
    itemClass = "frontGalleryGridItem";
  }
  return (
    <Zoom>
      <div className={itemClass} onClick={props.invokeBackdrop} style={style}>
        <img
          src={`/images/${props.imageName}`}
          alt="Gallery Item"
          id={props.id}
          className="galleryItem__img"
        />
      </div>
    </Zoom>
  );
};

export default galleryItem;
