// Types
import {AUTH} from '../../types';
import ApiClient from '../../../lib/axios/ApiClient';
import apiPaths from '../../../configs/apiPaths';
const {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  ONBOARD_COMPLETE,
  UPDATE_CURRENT_USER,
  REFRESH_ACCESS_TOKEN,
} = AUTH;

export const LOGIN_ACTION = (username, password) => {
  // REST
  // POST --> Post data
  // Get -> get data
  // PUT -> update
  // Delete -> delete
  return async (dispatch) => {
    // todo: send authentication request
    const response = await ApiClient.post(apiPaths.auth, {
      username: username,
      password: password,
    });
    const {data} = response;
    if (!data || !data.access_token) {
      throw new Error('Unexpected error');
    }
    return dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        jwt: data.access_token,
      },
    });
  };
};

export const UPDATE_CURRENT_USER_ACTION = () => {
  return async (dispatch) => {
    // todo: send get user info request
    const data = {};
    return dispatch({
      type: UPDATE_CURRENT_USER,
      payload: data,
    });
  };
};

export const REFRESH_ACCESS_TOKEN_ACTION = () => {
  return async (dispatch) => {
    // todo: send refresh access token request
    const data = {};
    return dispatch({
      type: REFRESH_ACCESS_TOKEN,
      payload: data,
    });
  };
};

export const ONBOARD_COMPLETE_ACTION = () => {
  return (dispatch) => {
    dispatch({
      type: ONBOARD_COMPLETE,
    });
  };
};

export const LOGOUT_ACTION = () => {
  return async (dispatch) => {
    return dispatch({
      type: LOGOUT_SUCCESS,
    });
  };
};
