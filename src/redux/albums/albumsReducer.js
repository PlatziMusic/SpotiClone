import { FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILURE, FETCH_GET_ALBUM } from './albumsTypes';

const initialState = {
  loading: false,
  albums: [],
  album: [],
  error: '',
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.payload,
        album: [],
        error: '',
      };
    case FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        albums: [],
        album: [],
        error: action.payload,
      };
    case FETCH_GET_ALBUM:
      return {
        ...state,
        loading: false,
        albums: [],
        album: action.payload,
        error: '',
      }
    default: return state;
  };
};

export default albumsReducer;
