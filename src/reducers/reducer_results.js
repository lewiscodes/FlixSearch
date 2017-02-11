import { GET_SEARCH, RECEIVED_SEARCH } from '../actions/index';

const INITIAL_STATE = { results: [101, 102, 103, 104], totalPages: null, currentPage: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_SEARCH:
      return state;
    case RECEIVED_SEARCH:
      return {...state, results: action.payload.results, totalPages: action.payload.totalPages, currentPage: action.payload.currentPage };
    default:
      return state;
  }
}
