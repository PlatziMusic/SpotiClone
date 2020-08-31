import { REGISTER_SUCCESS, REGISTER_FAILURE } from './registerTypes';

const initialState = {
  users: [],
  error: '',
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        users: [],
        error: action.payload,
      };
    default: return state;
  };
};

export default registerReducer;
