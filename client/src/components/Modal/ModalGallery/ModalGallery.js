import React from "react";
import "./ModalGallery.css";
import ExitButton from "../ExitButton/ExitButton";
import Carousel from "../../Carousel/Carousel";

const modalGallery = (props) => {
  const buildImageNumber = (str) => {
    let numStr = "";
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i])) {
        numStr += str[i];
      }
    }
    return numStr;
  };
  const indexOfLink = props.image.indexOf("/images");
  const relativeLink = buildImageNumber(props.image.slice(indexOfLink + 8));
  return (
    <div className="modalGallery__container">
      <Carousel
        itemsArr={props.itemsArr}
        autoPlay={false}
        selectedItem={relativeLink}
      />
      <ExitButton />
    </div>
  );
};

export default modalGallery;
