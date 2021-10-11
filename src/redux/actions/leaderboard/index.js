// Types
import {LEADERBOARD} from '../../types';
const {GET_LEADERBOARD} = LEADERBOARD;

export const GET_LEADERBOARD_ACTION = (timeRange, department) => {
  return async (dispatch) => {
    // todo: get leaderboard request
    const data = {};
    return dispatch({
      type: GET_LEADERBOARD,
      payload: data,
    });
  };
};
