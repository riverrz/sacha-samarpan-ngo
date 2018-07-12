import React, { Component } from "react";
import GalleryItem from "../Gallery/GalleryItem/GalleryItem";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import classes from "./FrontPageGallery.css";
import { Link } from "react-router-dom";
class frontPageGallery extends Component {
  state = {
    photos: [
      {
        name: "1.JPG"
      },
      {
        name: "2.JPG"
      },
      {
        name: "3.JPG"
      },
      {
        name: "4.JPG"
      }
    ]
  };
  // clickHandler = event => {
  //   console.log(event.target);
  // };
  render() {
    let images = this.state.photos.map((photo, id) => {
      return (
        <GalleryItem
          imageName={photo.name}
          key={id}
          invokeBackdrop={event => this.props.invokeBackdrop(event)}
          width="45%"
          height="24.2rem"
        />
      );
    });
    return (
      <WhiteContainer>
        <h1 className={classes.frontPageGallery__headingPrimary}>
          Our Precious <span>Moments</span>
        </h1>
        <div className={classes["frontPageGallery__container"]}>
          <div className={classes.frontPageGallery__imgContainer}>{images}</div>
          <div className={classes.frontPageGallery__videoContainer}>
            <iframe
              className={classes.frontPageGallery__video}
              title="pvr"
              frameBorder="0"
              src="https://www.youtube.com/embed/MG7dW2gChOs"
            />
            <div className={classes.overlay} id="overlay" onClick={this.props.invokeBackdrop} />
          </div>
        </div>
        <button className={classes.galleryLink}>
          <Link to="/full-gallery" exact>
            View All Photos <span className={classes.arrow}>→</span>
          </Link>
        </button>
      </WhiteContainer>
    );
  }
}

export default frontPageGallery;
