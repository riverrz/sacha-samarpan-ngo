import React from 'react';
import classes from './Backdrop.css';
const modal=props=> (
    <div className={classes.backdrop} onClick={props.clicked}>
        {props.children}
    </div>
);

export default modal;