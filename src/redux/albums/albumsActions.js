import axios from 'axios';
import { URL } from '../api'
import { FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILURE, FETCH_GET_ALBUM } from './albumsTypes';

const fetchAlbumsRequest = () => {
  return {
    type: FETCH_ALBUMS_REQUEST,
  };
};

const fetchAlbumsSuccess = (albums) => {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    payload: albums,
  };
};

const fetchAlbumsFailure = (error) => {
  return {
    type: FETCH_ALBUMS_FAILURE,
    payload: error,
  };
};

const fetchGetAlbum = (album) => {
  return {
    type: FETCH_GET_ALBUM,
    payload: album
  }
}

export const fetchAlbums = () => {
  return (dispatch) => {
    dispatch(fetchAlbumsRequest());
    axios.get(`${URL}/albums`)
      .then((response) => dispatch(fetchAlbumsSuccess(response.data)))
      .catch((error) => dispatch(fetchAlbumsFailure(error.message)));
  };
};

export const fetchAlbum = (id) => {
  return (dispatch) => {
    dispatch(fetchAlbumsRequest());
    axios.get(`${URL}/albums/${id}`)
      .then(response => dispatch(fetchGetAlbum(response.data)))
      .catch(error => dispatch(fetchAlbumsFailure(error.message)))
  }
}