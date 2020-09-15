import axios from 'axios';
import { URL } from '../api'
import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE } from './userTypes';


const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

const registerFailure = (payload) => {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
};

const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post(`${URL}/users/`, payload)
      .then(({ data }) => dispatch(registerSuccess(data)))
      .then(() => {
        window.location.href = redirectUrl
      })
      .catch(error => dispatch(registerFailure(error)))
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: `https://reqres.in/api/login`,
      method: 'post',
      data: {
        username: email,
        password
      }
    })
    .then(({ data: { token } }) => {
      localStorage.setItem('token', token)
    })
    .then(() => {
      window.location.href = redirectUrl;
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    })
  }
};
