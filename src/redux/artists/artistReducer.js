import {
  FETCH_ARTIST_REQUEST,
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_FAILURE,
  FETCH_GET_ARTIST,
} from './artistTypes';

const initialState = {
  loading: false,
  artists: [],
  artist: {},
  error: '',
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        artists: action.payload,
        artist: {},
        error: '',
      };
    case FETCH_ARTIST_FAILURE:
      return {
        ...state,
        loading: false,
        artists: [],
        artist: {},
        error: action.payload,
      };
    case FETCH_GET_ARTIST:
      return {
        ...state,
        loading: false,
        artists: [],
        artist: action.payload,
        error: '',
      };
    default:
      return state;
  }
};

export default artistReducer;
