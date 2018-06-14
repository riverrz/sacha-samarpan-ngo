import React from 'react';
import classes from './Gallery.css';
import classNames from "classnames";
const gallery = props=> {
    return <div className={classes.galleryContainer}>
        <h1 className={classes.gallery__headingPrimary}>
          Our Precious Moments
        </h1>
        <div className={classes.gallery}>
          <div className={classNames({
              [classes.gallery__item]: true,
              [classes.gallery__item1]: true
            })} />
          <div className={classNames({
              [classes.gallery__item]: true,
              [classes.gallery__item2]: true
            })} />
          <div className={classNames({
              [classes.gallery__item]: true,
              [classes.gallery__item3]: true
            })} />
          <div className={classNames({
              [classes.gallery__item]: true,
              [classes.gallery__item4]: true
            })} />
          <div className={classNames({
              [classes.gallery__item]: true,
              [classes.gallery__item5]: true
            })} />
          <div className={classNames({
              [classes.gallery__item]: true,
              [classes.gallery__item6]: true
            })} />
          <div className={classNames({
              [classes.gallery__item]: true,
              [classes.gallery__item7]: true
            })} />
          <div className={classNames({
              [classes.gallery__item]: true,
              [classes.gallery__item8]: true
            })} />
        </div>
      </div>;
}

export default gallery;