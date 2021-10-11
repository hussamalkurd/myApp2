// Types
import {BIO} from '../../types';
const {SEND_BIO, RESET_BIO, LOAD_CONTACT, DELETE_CONTACT} = BIO;

export const SEND_BIO_ACTION = (data) => {
  return async (dispatch) => {
    // todo: send bio
    const data = {};
    return dispatch({
      type: SEND_BIO,
      payload: data,
    });
  };
};

export const RESET_BIO_ACTION = () => {
  return async (dispatch) => {
    return dispatch({
      type: RESET_BIO,
    });
  };
};

export const LOAD_CONTACT_ACTION = () => {
  return async (dispatch) => {
    const data = {};
    return dispatch({
      type: LOAD_CONTACT,
      payload: data,
    });
  };
};

export const DELETE_CONTACT_ACTION = () => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CONTACT,
    });
  };
};
