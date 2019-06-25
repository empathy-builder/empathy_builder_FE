import { 
  LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR,
  REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR,
  } from '../actions/'
  
  const initialState = {
      loggingIn: false,
      registering: false,
      user: null,
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
                  logginIn: false,
                  message: '',
                  error: action.payload
              }
          case LOGIN_SUCCESS:
              return {
                  ...state,
                  logginIn: false,
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
                  message: '',
                  error: ''
              }
          default:
              return state
      }
  }
  
  export default reducer