import axios from 'axios';
import { FETCH_ALBUM_REQUEST, FETCH_ALBUM_SUCCESS, FETCH_ALBUM_FAILURE } from './albumTypes';

const fetchAlbumRequest = () => {
  return {
    type: FETCH_ALBUM_REQUEST,
  };
};

const fetchAlbumSuccess = (album) => {
  return {
    type: FETCH_ALBUM_SUCCESS,
    payload: album,
  };
};

const fetchAlbumFailure = (error) => {
  return {
    type: FETCH_ALBUM_FAILURE,
    payload: error,
  };
};

export const fetchAlbums = () => {
  return (dispatch) => {
    dispatch(fetchAlbumRequest());
    axios.get('https://4159b0f1a771.ngrok.io/album')
      .then((response) => {
        const album = response.data;
        dispatch(fetchAlbumSuccess(album));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchAlbumFailure(errorMsg));
      });
  };
};
