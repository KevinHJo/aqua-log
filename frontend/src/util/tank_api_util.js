import axios from 'axios';

export const createTank = tankData => {
  return axios.post('/api/tanks/', tankData);
}

export const fetchTank = tankId => {
  return axios.get(`/api/tanks/${tankId}`);
}

export const fetchUserTanks = userId => {
  return axios.get(`/api/tanks/user/${userId}`);
}