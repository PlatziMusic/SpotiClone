import axios from 'axios';
import { URL } from '../api'
import { REGISTER_SUCCESS, REGISTER_FAILURE } from './registerTypes';


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

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post(`${URL}/users`, payload)
      .then(({ data }) => dispatch(registerSuccess(data)))
      .then(() => {
        window.location.href = redirectUrl
      })
      .catch(error => dispatch(registerFailure(error)))
  };
};
