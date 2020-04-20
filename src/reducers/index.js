import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers } from "redux";
import { questions } from "./questions";
import { authUser } from "./authUser";
import { users } from "./users";

export default combineReducers({
  users,
  questions,
  authUser,
  loadingBar: loadingBarReducer,
});
