// Types
import {BIO} from '../../types';

const {SEND_BIO, RESET_BIO, LOAD_CONTACT, DELETE_CONTACT} = BIO;

// Initial State
const INITIAL_STATE = {
  result: null,
  contact: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_BIO:
      return {
        ...state,
        result: action.payload,
      };
    case RESET_BIO:
      return {
        ...state,
        result: null,
      };
    case LOAD_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contact: null,
      };
    default:
      return state;
  }
};
