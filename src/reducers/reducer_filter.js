import { GET_CERTIFICATES, RECEIVED_CERTIFICATES, ADD_SELECTED_CERTIFICATE, REMOVE_SELECTED_CERTIFICATE, ADD_SELECTED_GENRE, REMOVE_SELECTED_GENRE } from '../actions/actions_filter';

const INITIAL_STATE = { allCertificates: [], selectedCertificates: [], allGenres: [], selectedGenres: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_CERTIFICATES:
      return state;
    case RECEIVED_CERTIFICATES:
      return {...state, allCertificates: action.payload}
    case ADD_SELECTED_CERTIFICATE:
      return {...state, selectedCertificates: state.selectedCertificates.concat([action.payload])};
    case REMOVE_SELECTED_CERTIFICATE:
      return {...state, selectedCertificates: state.selectedCertificates.filter((item) => {return item !== action.payload})};
    case ADD_SELECTED_GENRE:
      return {...state, selectedGenres: state.selectedGenres.concat([action.payload])};
    case REMOVE_SELECTED_GENRE:
      return {...state, selectedGenres: state.selectedGenres.filter((item) => {return item !== action.payload})}
    default:
      return state;
  }
}
