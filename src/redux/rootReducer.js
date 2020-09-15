import { combineReducers } from 'redux';
import albumsReducer from './albums/albumsReducer';
import usersReducer from './users/userReducer';


const rootReducer = combineReducers({
  albums: albumsReducer,
  users: usersReducer,
});

export default rootReducer;
