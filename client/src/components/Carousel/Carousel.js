import React from 'react';
import classes from './Carousel.css';
const carousel = (props)=> {
    return(
        <div className={classes.Carousel}>
            <img src='/images/3.JPG' alt="main pic" className={classes.pic}/>
        </div>
    );
}

export default carousel;