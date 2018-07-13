import React from "react";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const carousel = props => {
  const settings = {
    showStatus: false,
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: true,
    stopOnHover: false,
    interval: 12000,
    emulateTouch: true,
    showIndicators: false,
    swipeable: true
  };
  return (
    <div className="carousel__slider">
      <Carousel {...settings}>
        <div className="carousel__imageBox">
          <img src="/images/1.JPG" alt="1" />
        </div>
        <div className="carousel__imageBox">
          <img src="/images/2.JPG" alt="2" />
        </div>
        <div className="carousel__imageBox">
          <img src="/images/3.JPG" alt="3" />
        </div>
      </Carousel>
    </div>
  );
};

export default carousel;
