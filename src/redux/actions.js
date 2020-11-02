import { GET_API, OPEN_MODAL } from "./types";

const getAPI = obj => {
  return { 
    type: GET_API, 
    payload: obj 
  }
}

const openModal = obj => {
  return { 
    type: OPEN_MODAL, 
    payload: obj 
  }
}

export { getAPI, openModal };
