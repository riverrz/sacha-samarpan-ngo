import React from "react";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const carousel = props => {
  const settings = {
    showStatus: false,
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: props.autoPlay,
    stopOnHover: false,
    interval: props.interval,
    emulateTouch: true,
    showIndicators: false,
    useKeyboardArrows: true,
    swipeable: true,
    selectedItem: props.selectedItem ? props.selectedItem - 1 : null
  };
  const items = props.itemsArr.map((item, i) => {
    return (
      <div className="carousel__imageBox" key={i}>
        <img src={`/images/${item}`} alt={`${item}`} />
      </div>
    );
  });
  return (
    <div className="carousel__slider">
      <Carousel {...settings}>{items}</Carousel>
    </div>
  );
};

export default carousel;
