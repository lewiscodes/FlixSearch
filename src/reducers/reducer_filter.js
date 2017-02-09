import { ADD_CERTIFICATE, REMOVE_CERTIFICATE, ADD_GENRE, REMOVE_GENRE } from '../actions/actions_filter';

const INITIAL_STATE = { certificates: [], genres: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_CERTIFICATE:
      return {...state, certificates: state.certificates.concat([action.payload])};
    case REMOVE_CERTIFICATE:
      return {...state, certificates: state.certificates.filter((item) => {return item !== action.payload})};
    case ADD_GENRE:
      return {...state, genres: state.genres.concat([action.payload])};
    case REMOVE_GENRE:
      return {...state, genres: state.genres.filter((item) => {return item !== action.payload})}
    default:
      return state;
  }
}
