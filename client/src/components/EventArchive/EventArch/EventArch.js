import React from 'react';
import  './EventArch.css';

const eventArch=props=> (
    <div className='eventArch__container'>
        <div className='eventArch__img__Container'>
            <img src={props.photo} alt="Event Archive 1" className='eventArch__photo'/>
        </div>
        <h2 className='eventArch__title'>{props.title}</h2>
        <h4 className='eventArch__date'>{props.postedOn}</h4>
    </div>
);

export default eventArch;