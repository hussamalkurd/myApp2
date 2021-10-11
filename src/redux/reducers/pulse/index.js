// Types
import {PULSE} from '../../types';

const {SEND_PULSE, RESET_PULSE} = PULSE;

// Initial State
const INITIAL_STATE = {
  result: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_PULSE:
      return {
        ...state,
        result: action.payload,
      };
    case RESET_PULSE:
      return {
        ...state,
        result: null,
      };
    default:
      return state;
  }
};
