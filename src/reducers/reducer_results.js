import { GET_SEARCH, RECEIVED_SEARCH } from '../actions/index';

const INITIAL_STATE = { results: [101, 102, 103, 104] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_SEARCH:
      return state;
    case RECEIVED_SEARCH:
      return {...state, results: action.payload};
    default:
      return state;
  }
}
