import {combineReducers} from 'redux';
import auth from './auth';
import bio from './bio';
import pulse from './pulse';
import leaderboard from './leaderboard';
import reviews from './reviews';

export default combineReducers({
  auth,
  bio,
  pulse,
  leaderboard,
  reviews,
});
