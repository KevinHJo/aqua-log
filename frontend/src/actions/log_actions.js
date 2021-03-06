import * as LogAPIUtil from '../util/log_api_util';

export const RECEIVE_LOG = 'RECEIVE_LOG';
export const RECEIVE_LOGS = 'RECEIVE_LOGS';
export const RECEIVE_LOG_ERRORS = 'RECEIVE_LOG_ERRORS';

//ACTION CREATORS
const receiveLog = log => {
  return {
    type: RECEIVE_LOG,
    log
  }
}

const receiveLogs = logs => {
  return {
    type: RECEIVE_LOGS,
    logs
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_LOG_ERRORS,
    errors
  }
}

//THUNK ACTION CREATORS
export const fetchLog = logId => dispatch => {
  LogAPIUtil.fetchLog(logId)
    .then(log => dispatch(receiveLog(log.data)));
}

export const fetchTankLogs = tankId => dispatch => {
  LogAPIUtil.fetchTankLogs(tankId)
    .then(logs => dispatch(receiveLogs(logs.data)));
}

export const fetchUserLogs = userId => dispatch => {
  LogAPIUtil.fetchUserLogs(userId)
    .then(logs => dispatch(receiveLogs(logs.data)));
}

export const createLog = logData => dispatch => {
  LogAPIUtil.createLog(logData).then(
    log => (dispatch(receiveLog(log.data))
    ), err => (
      dispatch(receiveErrors(err.response.data))
    ));
}