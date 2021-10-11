// Types
import {LEADERBOARD} from '../../types';

const {GET_LEADERBOARD} = LEADERBOARD;

// Initial State
const INITIAL_STATE = {
  list: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LEADERBOARD:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
