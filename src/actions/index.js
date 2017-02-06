export const GET_MOVIE = "GET_MOVIE";
export const RECEIVED_MOVIE = "RECEIVED_MOVIE";

const ROOT_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=84106750d8a60bce5c3b42e20e3b6f46";

export function getMovie(movieID) {
  return dispatch => {
    dispatch({type: GET_MOVIE});

    return fetch(ROOT_URL + "movie/" + movieID + API_KEY).then((response) => response.json()).then((payload) => {
      dispatch({
        type: RECEIVED_MOVIE,
        payload: payload
      });
    });
  }
}
