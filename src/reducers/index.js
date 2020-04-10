import { combineReducers } from "redux";
import { questions } from "./questions";
import { authUser } from "./authUser";
import { users } from "./users";

//TODO: add reducers here
export default combineReducers({ users, questions, authUser });
