import { combineReducers } from 'redux';
import MovieReducer from './reducer_movie';
import SearchReducer from './reducer_search';

const rootReducer = combineReducers({
  moviesReducer: MovieReducer,
  searchReducer: SearchReducer
});

export default rootReducer;
