import React from 'react';
import classes from './Inputfield.css';
const inputfield=props=> {
    return(
        <div className={classes.inputfield__container}>
            <input type={props.type} required className={classes.inputfield} placeholder={props.placeholder}/>
        </div>
    );
};

export default inputfield;