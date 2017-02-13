import { GET_MOVIE, RECEIVED_MOVIE } from '../actions/index';

const INITIAL_STATE = { movies: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_MOVIE:
      return state;
    case RECEIVED_MOVIE:
      return { ...state, movies: [action.payload].concat(state.movies)};
    default:
      return state;
  }
}
