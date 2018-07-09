import React from 'react';
import classes from './Backdrop.css';
import Modal from '../../components/Modal/Modal';
const modal = props => (
  <div className={classes.backdrop} onClick={props.clicked}>
    <Modal image={props.image} exitClicked={props.exitClicked} for={props.for}/>
  </div>
);

export default modal;