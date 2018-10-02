import * as actionTypes from "./actionTypes";

const initialState = {
  user: null,
  error: false,
  isAuth: localStorage.getItem("token") ? true : false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GOT_USER:
      return {
        ...state,
        user: action.user,
        isAuth: true,
        loading: false
      };
    case actionTypes.ERROR_USER:
      return {
        ...state,
        user: null,
        isAuth: false,
        loading: false,
        error: "Some error occured while fetching the user"
      };
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: null,
        isAuth: true,
        error: false,
        loading: false
      };
    case actionTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        user: null,
        isAuth: false,
        loading: false,
        error: "Error occured while logging you in! Please try again later"
      };
    case actionTypes.LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default reducer;
