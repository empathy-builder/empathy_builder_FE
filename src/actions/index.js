import axios from 'axios'
import axiosWithAuth from './axiosWithAuth'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START })
    
    return axios
        .post('https://empathy-builder.herokuapp.com/api/auth/register', creds)
        .then(res => {
            console.log(res)
            dispatch({
                type: REGISTER_SUCCESS, 
                payload: res.data.payload
            })
        })
        .catch((err) => {
            console.log(err.response.data)
            dispatch({
                type: REGISTER_ERROR,
                payload: `${err.response.data.error}`
            })
        })
}

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    
    axios
        .post('https://empathy-builder.herokuapp.com/api/auth/login', creds)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.user.token)
            dispatch({
                type: LOGIN_SUCCESS, 
                payload: {
                    message: res.data.message,
                    user: {
                        ...res.data.user
                    }
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_ERROR,
                payload: 'Error'
            })
        })
}

export const GET_DATA_START = 'GET_DATA_START'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'

export const getData  = dispatch => {
    dispatch({ type: GET_DATA_START })
    
    axiosWithAuth()
        .get(`https://empathy-builder.herokuapp.com/api/data/restricted`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_DATA_SUCCESS, 
                payload: {
                    users: res.data.data,
                    message: 'Data succesfully retrieved for your department.'
                }
            })
        })
        .catch((err) => {
            console.log(err.response.data)
            dispatch({
                type: GET_DATA_ERROR,
                payload: `${err.response.data.error}`
            })
        })
}
