import React from 'react';
import './Backdrop.css';
import Modal from '../../components/Modal/Modal';
const modal = props => (
  <div className='backdrop' onClick={props.clicked}>
    <Modal image={props.image} exitClicked={props.exitClicked} for={props.for}/>
  </div>
);

export default modal;