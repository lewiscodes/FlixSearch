import { combineReducers } from 'redux';
import MovieReducer from './reducer_movie';
import ResultsReducer from './reducer_results';
import FilterReducer from './reducer_filter';

const rootReducer = combineReducers({
  moviesReducer: MovieReducer,
  resultsReducer: ResultsReducer,
  filterReducer: FilterReducer
});

export default rootReducer;
