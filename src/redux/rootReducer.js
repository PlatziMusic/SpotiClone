import { combineReducers } from 'redux';
import albumsReducer from './albums/albumsReducer';
import registerReducer from "./register/registerReducer";


const rootReducer = combineReducers({
  albums: albumsReducer,
  register: registerReducer,
});

export default rootReducer;
