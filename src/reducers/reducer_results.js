import { GET_SEARCH, RECEIVED_SEARCH, UPDATE_MOVIE_INDEX } from '../actions/index';

const INITIAL_STATE = { results: [101, 102, 103, 104], totalPages: null, currentPage: null, lastMovieArrayIndex: 0 };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_SEARCH:
      return state;
    case RECEIVED_SEARCH:
      return {...state, results: action.payload.results, totalPages: action.payload.totalPages, currentPage: action.payload.currentPage };
    case UPDATE_MOVIE_INDEX:
      return {...state, lastMovieArrayIndex: action.payload};
    default:
      return state;
  }
}
