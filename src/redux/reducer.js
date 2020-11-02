import { OPEN_MODAL } from "./types";
import store from "./store";

const initialStore = [ { } ];

function reducer (store = initialStore, action) {
  switch(action.type) {
    case OPEN_MODAL: {
      console.log([...store, {...action.payload}]);
      return [...store];
    }
  }
  return store;
}

export default reducer;