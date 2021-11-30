import axios from 'axios';

export const createLog = logData => {
  return axios.post('/api/logs/', logData);
}

export const fetchLog = logId => {
  return axios.get(`/api/logs/${logId}`);
}

export const fetchTankLogs = tankId => {
  return axios.get(`/api/logs/tank/${tankId}`)
}

export const fetchUserLogs = userId => {
  return axios.get(`/api/logs/user/${userId}`);
}