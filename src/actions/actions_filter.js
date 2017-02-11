export const GET_CERTIFICATES = "GET_CERTIFICATES";
export const RECEIVED_CERTIFICATES = "RECEIVED_CERTIFICATES";
export const ADD_SELECTED_CERTIFICATE = "ADD_SELECTED_CERTIFICATE";
export const GET_GENRES = "GET_GENRES";
export const RECEIVED_GENRES = "RECEIVED_GENRES";
export const ADD_SELECTED_GENRE = "ADD_SELECTED_GENRE";
export const REMOVE_SELECTED_GENRE = "REMOVE_SELECTED_GENRE";

const ROOT_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=84106750d8a60bce5c3b42e20e3b6f46";

export function getGenres() {
  return dispatch => {
    dispatch({type: GET_GENRES});

    return fetch(ROOT_URL + "genre/movie/list" + API_KEY).then((response) => response.json()).then((payload) => {
      dispatch({
        type: RECEIVED_GENRES,
        payload: payload
      })
    })
  }
}

export function addSelectedGenre(genre) {
  return {
    type: ADD_SELECTED_GENRE,
    payload: genre
  }
}

export function removeSelectedGenre(genre) {
  return {
    type: REMOVE_SELECTED_GENRE,
    payload: genre
  }
}

export function getCertificates() {
  return dispatch => {
    dispatch({type: GET_CERTIFICATES});

    return fetch(ROOT_URL + "certification/movie/list" + API_KEY).then((response) => response.json()).then((payload) => {

      var sortedPayload = payload.certifications.GB.sort((a,b) => {
        return a.order - b.order;
      });

      // work out a better way to remove R18
      delete sortedPayload[sortedPayload.length-1];

      dispatch({
        type: RECEIVED_CERTIFICATES,
        payload: sortedPayload
      })
    });
  }
}

export function addSelectedCertificate(certificate) {
  return {
    type: ADD_SELECTED_CERTIFICATE,
    payload: certificate
  }
}
