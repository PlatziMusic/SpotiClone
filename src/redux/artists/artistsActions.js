import axios from 'axios';
import {URL} from '../api';
import {
  FETCH_ARTIST_REQUEST,
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_FAILURE,
  FETCH_GET_ARTIST,
} from './artistTypes';

const fetchArtistRequest = () => {
  return {
    type: FETCH_ARTIST_REQUEST,
  };
};

const fetchArtistSuccess = (artists) => {
  return {
    type: FETCH_ARTIST_SUCCESS,
    payload: artists,
  };
};

const fetchArtistFailure = (error) => {
  return {
    type: FETCH_ARTIST_FAILURE,
    payload: error,
  };
};

const fetchGetArtist = (artist) => {
  return {
    type: FETCH_GET_ARTIST,
    payload: artist,
  };
};

export const fetchArtists = () => {
  return (dispatch) => {
    dispatch(fetchArtistRequest());
    axios
      .get(`${URL}/artists/`)
      .then((response) => dispatch(fetchArtistSuccess(response.data)))
      .catch((error) => dispatch(fetchArtistFailure(error.message)));
  };
};

export const fetchArtist = (id) => {
  return (dispatch) => {
    dispatch(fetchArtistRequest());
    axios
      .get(`${URL}/artists/${id}`)
      .then((response) => dispatch(fetchGetArtist(response.data)))
      .catch((error) => dispatch(fetchArtistFailure(error.message)));
  };
};
