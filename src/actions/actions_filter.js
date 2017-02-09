export const ADD_SELECTED_CERTIFICATE = "ADD_SELECTED_CERTIFICATE";
export const REMOVE_SELECTED_CERTIFICATE = "REMOVE_SELECTED_CERTIFICATE";
export const ADD_SELECTED_GENRE = "ADD_SELECTED_GENRE";
export const REMOVE_SELECTED_GENRE = "REMOVE_SELECTED_GENRE";

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

export function addSelectedCertificate(certificate) {
  return {
    type: ADD_SELECTED_CERTIFICATE,
    payload: certificate
  }
}

export function removeSelectedCertificate(certificate) {
  return {
    type: REMOVE_SELECTED_CERTIFICATE,
    payload: certificate
  }
}
