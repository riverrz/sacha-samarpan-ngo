import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/ModalReducer/actionTypes";
import Popup from "./Popup/Popup";
import Video from "./Video/Video";
import ModalGallery from "./ModalGallery/ModalGallery";
import Backdrop from "../../containers/Backdrop/Backdrop";
import "./Modal.css";

class Modal extends Component {
  state = {
    frontPageImages: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    allImagesNames: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
      "17.jpeg",
      "19.jpeg",
      "20.jpeg",
      "21.jpeg",
    ],
  };

  componentWillMount() {
    let visited = sessionStorage["alreadyVisited"];
    if (!visited) {
      this.props.modalPopup();
      sessionStorage["alreadyVisited"] = true;
    }
  }
  render() {
    let content;
    switch (this.props.modalFor) {
      case "popup":
        content = (
          <Popup
            marginTop={this.state.marginTop}
            exitClicked={this.props.modalClose}
          />
        );
        break;
      case "gallery":
        content = (
          <ModalGallery
            marginTop={this.state.marginTop}
            image={this.props.imageToLoad}
            itemsArr={
              this.props.isGalleryFull
                ? this.state.allImagesNames
                : this.state.frontPageImages
            }
          />
        );
        break;
      case "video":
        content = <Video marginTop={this.state.marginTop} />;
        break;
      default:
        content = null;
    }
    let modal;
    if (!this.props.modalFor) {
      modal = null;
      document.body.style.overflowY = "auto";
    } else {
      modal = (
        <div className="modal__container">
          <Backdrop />
          {content}
        </div>
      );
      document.body.style.overflowY = "hidden";
    }
    return modal;
  }
}

const mapStateToProps = (state) => {
  return {
    modalFor: state.modal.modalFor,
    imageToLoad: state.modal.imageToLoad,
    isGalleryFull: state.modal.isGalleryFull,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalClose: () => dispatch({ type: actionTypes.MODAL_CLOSE }),
    modalPopup: () => dispatch({ type: actionTypes.MODAL_POPUP }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
