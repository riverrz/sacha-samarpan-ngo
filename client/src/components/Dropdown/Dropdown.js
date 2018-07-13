import React from 'react';
import  './Dropdown.css';
const dropdown=props=> (
    <ul className='dropDown__list'>
        {props.children}
    </ul>
);

export default dropdown;