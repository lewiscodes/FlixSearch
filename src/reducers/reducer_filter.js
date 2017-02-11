import { GET_CERTIFICATES, RECEIVED_CERTIFICATES, ADD_SELECTED_CERTIFICATE, GET_GENRES, RECEIVED_GENRES, ADD_SELECTED_GENRE, REMOVE_SELECTED_GENRE } from '../actions/actions_filter';

const INITIAL_STATE = { allCertificates: [], selectedCertificate: null, allGenres: [], selectedGenres: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_CERTIFICATES:
      return state;
    case RECEIVED_CERTIFICATES:
      return {...state, allCertificates: action.payload};
    case ADD_SELECTED_CERTIFICATE:
      return {...state, selectedCertificate: action.payload};
    case GET_GENRES:
      return state;
    case RECEIVED_GENRES:
      return {...state, allGenres: action.payload};
    case ADD_SELECTED_GENRE:
      return {...state, selectedGenres: state.selectedGenres.concat([action.payload])};
    case REMOVE_SELECTED_GENRE:
      return {...state, selectedGenres: state.selectedGenres.filter((item) => {return item !== action.payload})};
    default:
      return state;
  }
}
