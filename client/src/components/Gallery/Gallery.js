import React, { Component } from "react";
import "./Gallery.css";
import GalleryItem from "./GalleryItem/GalleryItem";
import { Link } from "react-router-dom";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

class Gallery extends Component {
  state = {
    images: [
      {
        name: "1.jpg",
      },
      {
        name: "2.jpg",
      },
      {
        name: "3.jpg",
      },
      {
        name: "4.jpg",
      },
      {
        name: "5.jpg",
      },
      {
        name: "6.jpg",
      },
      {
        name: "7.jpg",
      },
      {
        name: "8.jpg",
      },
      {
        name: "9.jpg",
      },
      {
        name: "10.jpg",
      },
      {
        name: "11.jpg",
      },
      {
        name: "12.jpg",
      },
      {
        name: "13.jpg",
      },
      {
        name: "14.jpg",
      },
      {
        name: "15.jpg",
      },
      {
        name: "16.jpg",
      },
      {
        name: "17.jpeg",
      },
      {
        name: "19.jpeg",
      },
      {
        name: "20.jpeg",
      },
      {
        name: "21.jpeg",
      },
    ],
  };
  render() {
    const allGalleryItems = this.state.images.map((data, i) => {
      return <GalleryItem imageName={data.name} key={i} isFull={true} />;
    });
    let possibleButton = (
      <button className="gallery__link">
        <Link to="/full-gallery" exact>
          View All Photos <span className="gallery__arrow">→</span>
        </Link>
      </button>
    );
    if (!this.props.limit) {
      possibleButton = null;
    }
    return (
      <WhiteContainer>
        <h1 className="gallery__headingPrimary">
          Our Precious <span>Moments</span>
        </h1>
        <div className="gallery">{allGalleryItems}</div>
        {possibleButton}
      </WhiteContainer>
    );
  }
}
export default Gallery;
