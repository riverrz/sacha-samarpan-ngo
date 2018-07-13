import React from 'react';
import './Member.css';
const member = props=> (
    <div className='member__container'>
        <div className='member__imgContainer'>
            <img src={props.photo} alt="Member" className='member__img'/>
        </div>
        <div className='member__textContainer'>
            <h2 className='member__name'>{props.name}</h2>
            <h3 className='member__designation'>{props.designation}</h3>
            <p className='member__description'>{props.description}</p>
        </div>
    </div>
);

export default member;