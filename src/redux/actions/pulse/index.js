// Types
import {PULSE} from '../../types';
const {SEND_PULSE, RESET_PULSE} = PULSE;

export const SEND_PULSE_ACTION = (data) => {
  return async (dispatch) => {
    // todo: send pulse
    const data = {};
    return dispatch({
      type: SEND_PULSE,
      payload: data,
    });
  };
};

export const RESET_PULSE_ACTION = () => {
  return async (dispatch) => {
    return dispatch({
      type: RESET_PULSE,
    });
  };
};
