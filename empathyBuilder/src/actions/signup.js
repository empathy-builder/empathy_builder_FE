import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()
    .post("/signup", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: SIGNUP_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response));
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    .get("/data")
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
    });
};
