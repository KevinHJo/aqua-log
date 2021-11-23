import { combineReducers } from "redux";
import UsersReducer from './users_reducer.js';

const EntitiesReducer = combineReducers({
  users: UsersReducer
});

export default EntitiesReducer