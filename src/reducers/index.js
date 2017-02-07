import { combineReducers } from 'redux';
import MovieReducer from './reducer_movie';
import SearchReducer from './reducer_search';
import FilterReducer from './reducer_filter';

const rootReducer = combineReducers({
  moviesReducer: MovieReducer,
  searchReducer: SearchReducer,
  filterReducer: FilterReducer
});

export default rootReducer;
