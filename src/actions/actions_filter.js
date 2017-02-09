export const ADD_CERTIFICATE = "ADD_CERTIFICATE";
export const REMOVE_CERTIFICATE = "REMOVE_CERTIFICATE";

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
