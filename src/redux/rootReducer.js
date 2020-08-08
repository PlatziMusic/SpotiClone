import { combineReducers } from 'redux';
import albumReducer from './Album/albumReducer';

const rootReducer = combineReducers({
  album: albumReducer,
});

export default rootReducer;
