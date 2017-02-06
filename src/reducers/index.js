import { combineReducers } from 'redux';
import MovieReducer from './reducer_movie';

const rootReducer = combineReducers({
  moviesReducer: MovieReducer
});

export default rootReducer;
