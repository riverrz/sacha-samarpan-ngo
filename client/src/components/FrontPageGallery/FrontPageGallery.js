import React from "react";
import GalleryItem from "../Gallery/GalleryItem/GalleryItem";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import "./FrontPageGallery.css";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";

const frontPageGallery = props => {
  let images = props.imgArr.map((photo, id) => {
    return (
      <GalleryItem
        imageName={photo}
        key={id}
        invokeBackdrop={event => props.invokeBackdrop(event)}
        id="in-frontGallery"
        isGridItem={true}
      />
    );
  });
  return (
    <WhiteContainer>
      <h1 className="frontPageGallery__headingPrimary">
        Our Precious <span>Moments</span>
      </h1>
      <div className="frontPageGallery__container">
        <Zoom>{images}</Zoom>
        <Zoom delay={100}>
          <div className="frontPageGallery__videoContainer">
            <iframe
              className="frontPageGallery__video"
              title="pvr"
              frameBorder="0"
              src="https://www.youtube.com/embed/MG7dW2gChOs"
            />
            <div
              className="frontPageGallery__overlay"
              id="overlay"
              onClick={props.invokeBackdrop}
            />
          </div>
        </Zoom>
      </div>
      <button className="frontPageGallery__galleryLink">
        <Link to="/full-gallery" exact>
          View All Photos <span className="frontPageGallery__arrow">→</span>
        </Link>
      </button>
    </WhiteContainer>
  );
};

export default frontPageGallery;
