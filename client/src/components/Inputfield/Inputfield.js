import React from 'react';
import  './Inputfield.css';
const inputfield=props=> {
    return <div className='inputfield__container'>
        <input type={props.type} required className='inputfield' placeholder={props.placeholder} name={props.name}/>
        <i className={props.iconClass} />
      </div>;
};

export default inputfield;