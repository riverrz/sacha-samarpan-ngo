import React from "react";
import "./GalleryItem.css";
import { Zoom } from "react-reveal";
import { connect } from "react-redux";
import { MODAL_GALLERY } from "../../../store/ModalReducer/actionTypes";

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
    <Zoom delay={200}>
      <div
        className={itemClass}
        onClick={event => props.modalGallery(event, props.isFull)}
        style={style}
      >
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

const mapDispatchToProps = dispatch => {
  return {
    modalGallery: (event, isFull) =>
      dispatch({ type: MODAL_GALLERY, imageToLoad: event.target.src, isFull })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(galleryItem);
