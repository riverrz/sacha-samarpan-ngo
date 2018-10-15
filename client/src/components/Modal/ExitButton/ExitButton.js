import React from "react";
import "./ExitButton.css";
import { MODAL_CLOSE } from "../../../store/ModalReducer/actionTypes";

import { connect } from "react-redux";

const exitButton = props => {
  return (
    <button
      className="exitButton"
      onClick={props.modalClose}
    >
      <i className="fas fa-times" />
    </button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    modalClose: () => dispatch({ type: MODAL_CLOSE })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(exitButton);
