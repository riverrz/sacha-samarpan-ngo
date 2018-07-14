import React from "react";
import "./Backdrop.css";
import Modal from "../../components/Modal/Modal";
const modal = props => (
  <div className="backdrop">
    <Modal
      image={props.image}
      exitClicked={props.exitClicked}
      for={props.for}
      itemsArr={props.itemsArr}
    />
  </div>
);

export default modal;
