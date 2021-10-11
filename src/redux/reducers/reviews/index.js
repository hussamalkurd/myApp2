// Types
import {REVIEWS} from '../../types';

const {GET_REVIEWS} = REVIEWS;

// Initial State
const INITIAL_STATE = {
  list: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
