import { GET_SEARCH, RECEIVED_SEARCH } from '../actions/index';

const INITIAL_STATE = { results: [] };

export default function(state = INITIAL_STATE, action) {
  // console.log(action.type);
  switch(action.type) {
    case GET_SEARCH:
      return state;
    case RECEIVED_SEARCH:
      return {...state, results: action.payload};
    default:
      return state;
  }
}
