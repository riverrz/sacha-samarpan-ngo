import React from 'react';
import classes from './Modal.css';
const modal=props=> {
    var indexOfLink=props.image.indexOf('/images');
    const relativeLink = props.image.slice(indexOfLink);
    return <div className={classes.modalContainer}>
        <img src={relativeLink} alt="Invoked"/>
    </div>;
};

export default modal;