// Types
import {AUTH} from '../../types';

const {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  ONBOARD_COMPLETE,
  UPDATE_CURRENT_USER,
  REFRESH_ACCESS_TOKEN,
} = AUTH;

// Initial State
const INITIAL_STATE = {
  isLoggedIn: false,
  onBoardingComplete: false,
  // user: null,
  jwt: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        // user: action.payload.user,
        jwt: action.payload.jwt,
        isLoggedIn: true,
      };
    case REFRESH_ACCESS_TOKEN:
      return {
        ...state,
        jwt: action.payload,
      };
    case ONBOARD_COMPLETE:
      return {
        ...state,
        onBoardingComplete: true,
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
