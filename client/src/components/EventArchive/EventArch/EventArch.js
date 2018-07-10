import React from 'react';
import classes from './EventArch.css';

const eventArch=props=> (
    <div className={classes.container}>
        <div className={classes.img__Container}>
            <img src={props.photo} alt="Event Archive 1" className={classes.photo}/>
        </div>
        <h2 className={classes.title}>{props.title}</h2>
        <h4 className={classes.date}>{props.postedOn}</h4>
    </div>
);

export default eventArch;