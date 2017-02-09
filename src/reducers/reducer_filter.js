import { ADD_CERTIFICATE, REMOVE_CERTIFICATE } from '../actions/actions_filter';

const INITIAL_STATE = { certificates: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_CERTIFICATE:
      return {...state, certificates: state.certificates.concat([action.payload])};
      return state;
    case REMOVE_CERTIFICATE:
      return {...state, certificates: state.certificates.filter((item) => {return item !== action.payload})}
    default:
      return state;
  }
}
