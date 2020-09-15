import {combineReducers} from 'redux';
import albumsReducer from './albums/albumsReducer';
import usersReducer from './users/userReducer';
import artistReducer from './artists/artistReducer';

const rootReducer = combineReducers({
  albums: albumsReducer,
  users: usersReducer,
  artists: artistReducer,
});

export default rootReducer;
