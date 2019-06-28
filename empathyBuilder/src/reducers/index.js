import { 
  LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR,
  REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR,
  GET_DATA_START,GET_DATA_SUCCESS,GET_DATA_ERROR,
  } from '../actions/'
  
  const initialState = {
      loggingIn: false,
      loggedIn: false,
      registering: false,
      registered: false,
      fetchingData: false,
      user: null,
      data: null,
      error: '',
      message: ''
  }
  
  const reducer = (state = initialState, action) => {
      switch (action.type) {
          case LOGIN_START:
              return {
                  ...state,
                  loggingIn: true,
                  message: '',
                  error: ''
              }
          case LOGIN_ERROR:
              return {
                  ...state,
                  loggingIn: false,
                  message: '',
                  error: action.payload
              }
          case LOGIN_SUCCESS:
              return {
                  ...state,
                  loggingIn: false,
                  loggedIn: true,
                  user: action.payload.user,
                  message: action.payload.message,
                  error: ''
              }
          case REGISTER_START:
              return {
                  ...state,
                  registering: true,
                  message: '',
                  error: ''
              }
          case REGISTER_ERROR:
              return {
                  ...state,
                  registering: false,
                  message: '',
                  error: action.payload
              }
          case REGISTER_SUCCESS:
              return {
                  ...state,
                  registering: false,
                  registered: true,
                  message: '',
                  error: ''
              }
            case GET_DATA_START:
              return {
                  ...state,
                  fetchingData: true,
                  message: '',
                  error: ''
              }
          case GET_DATA_ERROR:
              return {
                  ...state,
                  fetchingData: false,
                  message: '',
                  error: action.payload
              }
          case GET_DATA_SUCCESS:
              return {
                  ...state,
                  fetchingData: false,
                  data: action.payload,
                  message: '',
                  error: ''
              }
          default:
              return state
      }
  }
  
  export default reducer