import axios from 'axios';
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
    axios.get('http://localhost:3001/albums')
      .then((response) => {
        const albums = response.data;
        dispatch(fetchAlbumsSuccess(albums));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchAlbumsFailure(errorMsg));
      });
  };
};

export const fetchAlbum = (id) => {
  return (dispatch) => {
    dispatch(fetchAlbumsRequest());
    axios.get(`http://localhost:3001/albums/${id}`)
      .then(response => {
        const album = response.data;
        dispatch(fetchGetAlbum(album))
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchAlbumsFailure(errorMsg));
      })
  }
}