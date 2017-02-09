export const GET_MOVIE = "GET_MOVIE";
export const RECEIVED_MOVIE = "RECEIVED_MOVIE";
export const GET_SEARCH = "GET_SEARCH";
export const RECEIVED_SEARCH = "RECEIVED_SEARCH";

const ROOT_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=84106750d8a60bce5c3b42e20e3b6f46";

export function getSearch(searchString) {
  searchString = searchString.replace(" ","+");

  return dispatch => {
    dispatch({type: GET_SEARCH});

    return fetch(ROOT_URL + "search/movie" + API_KEY + "&query=" + searchString).then((response) => response.json()).then((payload) => {
      var array = [];
      payload.results.map((result) => {
        array.push(result.id);
      });
      dispatch({
        type: RECEIVED_SEARCH,
        payload: array
      });
    });
  }
}

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
