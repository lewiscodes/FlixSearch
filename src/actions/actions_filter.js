export const ADD_CERTIFICATE = "ADD_CERTIFICATE";
export const REMOVE_CERTIFICATE = "REMOVE_CERTIFICATE";
export const ADD_GENRE = "ADD_GENRE";
export const REMOVE_GENRE = "REMOVE_GENRE";

export function addGenre(genre) {
  return {
    type: ADD_GENRE,
    payload: genre
  }
}

export function removeGenre(genre) {
  return {
    type: REMOVE_GENRE,
    payload: genre
  }
}

export function addCertificate(certificate) {
  return {
    type: ADD_CERTIFICATE,
    payload: certificate
  }
}

export function removeCertificate(certificate) {
  return {
    type: REMOVE_CERTIFICATE,
    payload: certificate
  }
}
