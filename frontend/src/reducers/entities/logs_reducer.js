import { RECEIVE_LOG, RECEIVE_LOGS } from "../../actions/log_actions";

const LogsReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_LOG:
      nextState[action.log._id] = action.log;
      return nextState;
    case RECEIVE_LOGS:
      action.logs.forEach(log => nextState[log._id] = log);
      return nextState;
    default:
      return state;
  }
}

export default LogsReducer