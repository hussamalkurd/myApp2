// Types
import {REVIEWS} from '../../types';
const {GET_REVIEWS} = REVIEWS;

export const GET_REVIEWS_ACTION = (timeRange, department) => {
  return async (dispatch) => {
    // todo: get reviews request
    const data = {};
    return dispatch({
      type: GET_REVIEWS,
      payload: data,
    });
  };
};
