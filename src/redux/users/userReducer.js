import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE } from './userTypes';

const initialState = {
  user: {},
  error: '',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
      };
    default: return state;
  };
};

export default usersReducer;
