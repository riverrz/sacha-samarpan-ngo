import React from 'react';
import classes from './EventArch.css';

const eventArch=props=> (
    <div className={classes.eventArch__container}>
        <div className={classes.eventArch__img__Container}>
            <img src={props.photo} alt="Event Archive 1" className={classes.eventArch__photo}/>
        </div>
        <h2 className={classes.eventArch__title}>{props.title}</h2>
        <h4 className={classes.eventArch__date}>{props.postedOn}</h4>
    </div>
);

export default eventArch;