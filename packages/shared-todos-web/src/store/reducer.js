import { combineReducers } from "redux";

import {
  actions as authActions,
  reducer as authReducer,
} from "../services/auth";
import { reducer as listsReducer } from "../services/lists";

const combinedRootReducer = combineReducers({
  auth: authReducer,
  lists: listsReducer,
});

function rootReducer(state, action) {
  if (action.type === authActions.logout.toString()) {
    state = undefined;
    localStorage.removeItem("persist:auth");
    localStorage.removeItem("persist:lists");
  }

  return combinedRootReducer(state, action);
}

export default rootReducer;
