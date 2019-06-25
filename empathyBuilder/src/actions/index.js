import axios from "axios";

// action types
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://empathy-builder.herokuapp.com/api/auth/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err.message));
};

export const FETCH_MEMBER_START = "FETCH_MEMBER_START";
export const FETCH_MEMBER_SUCCESS = "FETCH_MEMBER_SUCCESS";
export const FETCH_MEMBER_FAIL = "FETCH_MEMBER_FAIL";

export const getMember = () => dispatch => {
  dispatch({ type: FETCH_MEMBER_START });
  axios
    .get("https://empathy-builder.herokuapp.com/api/auth/login")
    .then(res => {
      dispatch({ type: FETCH_MEMBER_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({ type: FETCH_MEMBER_FAIL, payload: err });
    });
};

export const ADD_MEMBER_START = "ADD_MEMBER_START";
export const ADD_MEMBER_SUCCESS = "ADD_MEMBER_SUCCESS";
export const ADD_MEMBER_FAIL = "ADD_MEMBER_FAIL";

export const addMember = newMember => dispatch => {
  dispatch({ type: ADD_MEMBER_START });
  axios
    .post(`https://empathy-builder.herokuapp.com/api/auth/register`, newMember)
    .then(res => {
      dispatch({ type: ADD_MEMBER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_MEMBER_FAIL, payload: err });
    });
};
