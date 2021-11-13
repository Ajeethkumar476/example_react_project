import { createStore, combineReducers } from "redux";
import userReducers from "./UserDetails/UserReducers";
import jobReducers from './JobDetails/JobReducers';

const store = createStore(combineReducers({
  user: userReducers,
  job: jobReducers
}));

export default store;
