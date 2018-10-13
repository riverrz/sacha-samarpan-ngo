import * as actionTypes from "./actionTypes";
import axios from "axios";

export const gotUser = user => {
  return {
    type: actionTypes.GOT_USER,
    user
  };
};

export const errorUser = redirectTo => {
  return {
    type: actionTypes.ERROR_USER,
    redirectTo
  };
};
export const loading = () => {
  return {
    type: actionTypes.LOADING
  };
};
export const fetchUser = redirectTo => {
  return dispatch => {
    dispatch(loading());
    axios
      .get("/getUser", {
        headers: {
          authorization: localStorage.getItem("token")
        }
      })
      .then(response => {
        dispatch(gotUser(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(errorUser(redirectTo));
      });
  };
};

export const loginUser = userDetails => {
  return dispatch => {
    dispatch(loading());
    axios
      .post("/user/login", userDetails)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        dispatch({ type: actionTypes.USER_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: actionTypes.USER_FAIL });
      });
  };
};
export const registerUser = userDetails => {
  return dispatch => {
    dispatch(loading());
    axios
      .post("/user/register", userDetails)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        dispatch({ type: actionTypes.USER_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: actionTypes.USER_FAIL });
      });
  };
};
