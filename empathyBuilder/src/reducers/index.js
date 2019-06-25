import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_MEMBER_START,
  FETCH_MEMBER_SUCCESS,
  FETCH_MEMBER_FAIL,
  ADD_MEMBER_START,
  ADD_MEMBER_SUCCESS,
  ADD_MEMBER_FAIL
} from "../actions";

const intitialState = {
  users: [],
  fetchingMember: false,
  addingMember: false,
  isLoggingIn: false,
  error: null
};

export const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        error: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      };
    case FETCH_MEMBER_START:
      return {
        ...state,
        fetchingMember: true,
        error: ""
      };
    case FETCH_MEMBER_SUCCESS:
      return {
        ...state,
        fetchingMember: false,
        users: action.payload
      };
    case FETCH_MEMBER_FAIL:
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload
      };
    case ADD_MEMBER_START:
      return {
        ...state,
        addingMember: true,
        error: ""
      };
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        addingMember: false,
        users: action.payload
      };
    case ADD_MEMBER_FAIL:
      return {
        ...state,
        addingMember: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
