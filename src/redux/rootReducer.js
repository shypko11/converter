import { SET_ALL_CURR } from './types';

const initialState = {
  list: []
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALL_CURR: {
      return { ...state, list: payload };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
