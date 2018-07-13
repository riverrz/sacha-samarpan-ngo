import React from "react";
import  "./Carousel.css";
const carousel = props => {
  return (
    // <div className={classes.Carousel}>
    //     <img src='/images/3.JPG' alt="main pic" className={classes.pic}/>
    // </div>
    <div className='carousel__slider'>
      <figure>
        <div className='carousel__imageBox'><img src="/images/1.JPG" alt="1" /></div>
        <div className='carousel__imageBox'><img src="/images/2.JPG" alt="2" /></div>
        <div className='carousel__imageBox'><img src="/images/3.JPG" alt="3" /></div>
        <div className='carousel__imageBox'><img src="/images/2.JPG" alt="2" /></div>
        <div className='carousel__imageBox'><img src="/images/1.JPG" alt="1" /></div>
      </figure>
    </div>
  );
};

export default carousel;
