import { combineReducers } from "redux";
import UsersReducer from './users_reducer.js';
import TanksReducer from './tanks_reducer';
import LogsReducer from "./logs_reducer.js";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  tanks: TanksReducer,
  logs: LogsReducer
});

export default EntitiesReducer