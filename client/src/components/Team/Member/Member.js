import React from 'react';
import classes from './Member.css';
const member = props=> (
    <div className={classes.member__container}>
        <div className={classes.member__imgContainer}>
            <img src={props.photo} alt="Member" className={classes.member__img}/>
        </div>
        <div className={classes.member__textContainer}>
            <h2 className={classes.member__name}>{props.name}</h2>
            <h3 className={classes.member__designation}>{props.designation}</h3>
            <p className={classes.member__description}>{props.description}</p>
        </div>
    </div>
);

export default member;