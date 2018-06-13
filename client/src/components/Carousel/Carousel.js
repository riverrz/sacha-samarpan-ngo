import React from 'react';
import classes from './Carousel.css';
import Photo from '../../assets/3.JPG';
const carousel = (props)=> {
    return(
        <div className={classes.Carousel}>
            <img src={Photo} alt="main pic" className={classes.pic}/>
        </div>
    );
}

export default carousel;