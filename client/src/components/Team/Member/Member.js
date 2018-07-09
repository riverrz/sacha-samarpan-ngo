import React from 'react';
import classes from './Member.css';
const member = props=> (
    <div className={classes.container}>
        <div className={classes.imgContainer}>
            <img src={props.photo} alt="Member" className={classes.img}/>
        </div>
        <div className={classes.textContainer}>
            <h2 className={classes.name}>{props.name}</h2>
            <h3 className={classes.designation}>{props.designation}</h3>
            <p className={classes.description}>{props.description}</p>
        </div>
    </div>
);

export default member;