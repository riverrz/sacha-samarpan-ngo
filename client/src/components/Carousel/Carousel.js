import React from "react";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Zoom } from "react-reveal";

const carousel = props => {
  const settings = {
    showStatus: false,
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: props.autoPlay,
    stopOnHover: false,
    interval: props.interval,
    showIndicators: false,
    useKeyboardArrows: true,
    swipeable: true,
    selectedItem: props.selectedItem ? props.selectedItem - 1 : null
  };
  const items = props.itemsArr.map((item, i) => {
    return (
      <div className="carousel__imageBox" key={i}>
        <img src={`/images/${item}`} alt={`${item}`} />
        {/* <div className="carousal__imageDescription">
          <h2 className="carousal__imageTitle">Heading</h2>
          <p className="carousal__imageText">Description about the image</p>
        </div> */}
      </div>
    );
  });
  return (
    <div className="carousel__slider">
      <Zoom duration={700}>
        <Carousel {...settings}>{items}</Carousel>
      </Zoom>
    </div>
  );
};

export default carousel;
