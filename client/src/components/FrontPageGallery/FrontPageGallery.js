import React from "react";
import GalleryItem from "../Gallery/GalleryItem/GalleryItem";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import "./FrontPageGallery.css";
import { Link } from "react-router-dom";
const frontPageGallery = props => {
    let images = props.imgArr.map((photo, id) => {
      console.log(photo)
      return (
        <GalleryItem
          imageName={photo}
          key={id}
          invokeBackdrop={event => props.invokeBackdrop(event)}
          width="45%"
          height="24.2rem"
          id="in-frontGallery"
        />
      );
    });
    return (
      <WhiteContainer>
        <h1 className='frontPageGallery__headingPrimary'>
          Our Precious <span>Moments</span>
        </h1>
        <div className="frontPageGallery__container">
          <div className='frontPageGallery__imgContainer'>{images}</div>
          <div className='frontPageGallery__videoContainer'>
            <iframe
              className='frontPageGallery__video'
              title="pvr"
              frameBorder="0"
              src="https://www.youtube.com/embed/MG7dW2gChOs"
            />
            <div className='frontPageGallery__overlay' id="overlay" onClick={props.invokeBackdrop} />
          </div>
        </div>
        <button className='frontPageGallery__galleryLink'>
          <Link to="/full-gallery" exact>
            View All Photos <span className='frontPageGallery__arrow'>→</span>
          </Link>
        </button>
      </WhiteContainer>
    );
}

export default frontPageGallery;
