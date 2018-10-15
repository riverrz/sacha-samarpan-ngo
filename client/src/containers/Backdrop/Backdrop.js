import React from "react";
import "./Backdrop.css";
import { MODAL_CLOSE } from "../../store/ModalReducer/actionTypes";
import { connect } from "react-redux";

const modal = props => <div className="backdrop" onClick={props.closeModal} />;

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch({ type: MODAL_CLOSE })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(modal);
