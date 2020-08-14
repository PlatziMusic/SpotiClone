import { combineReducers } from 'redux';
import albumReducer from './albums/albumReducer';

const rootReducer = combineReducers({
  album: albumReducer,
});

export default rootReducer;
