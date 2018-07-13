import React from 'react';
import classes from './Dropdown.css';
const dropdown=props=> (
    <ul className={classes.dropDown__list}>
        {props.children}
    </ul>
);

export default dropdown;