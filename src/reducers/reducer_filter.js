import { ADD_CERTIFICATE, REMOVE_CERTIFICATE } from '../actions/actions_filter';

const INITIAL_STATE = { certificates: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_CERTIFICATE:
      return {...state, [action.payload].concat(state.certificates)};
    case REMOVE_CERTIFICATE:
      return state;
    default:
      return state;
  }
}
