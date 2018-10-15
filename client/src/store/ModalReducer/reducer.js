import * as actionTypes from "./actionTypes";

const initialState = {
  modalFor: "",
  imageToLoad: null,
  isGalleryFull: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODAL_POPUP:
      return {
        ...state,
        modalFor: "popup",
        imageToLoad: null,
        isGalleryFull: null
      };
    case actionTypes.MODAL_GALLERY:
      return {
        ...state,
        modalFor: "gallery",
        imageToLoad: action.imageToLoad,
        isGalleryFull: action.isFull ? true : false
      };
    case actionTypes.MODAL_VIDEO:
      return {
        ...state,
        modalFor: "video",
        imageToLoad: null
      };
    case actionTypes.MODAL_CLOSE:
      return {
        ...state,
        modalFor: "",
        imageToLoad: null
      };
    default:
      return state;
  }
};

export default reducer;
