export const ADD_CERTIFICATE = "ADD_CERTIFICATE";
export const REMOVE_CERTIFICATE = "REMOVE_CERTIFICATE";

export function addCertificate(certificate) {
  return dispatch => {
    type: ADD_CERTIFICATE,
    payload: certificate
  }
}

export function removeCertificate(index) {
  return dispatch => {
    type: REMOVE_CERTIFICATE,
    payload: index
  }
}
