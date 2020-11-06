import { combineReducers } from "redux";
import user from "./useReducer";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;