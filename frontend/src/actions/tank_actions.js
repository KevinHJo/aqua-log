import * as TankAPIUtil from '../util/tank_api_util';

export const RECEIVE_TANK = 'RECEIVE_TANK';
export const RECEIVE_TANKS = 'RECEIVE_TANKS';
export const RECEIVE_TANK_ERRORS = 'RECEIVE_TANK_ERRORS';

//ACTION CREATORS
const receiveTank = tank => {
  return {
    type: RECEIVE_TANK,
    tank
  }
}

const receiveTanks = tanks => {
  return {
    type: RECEIVE_TANKS,
    tanks
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_TANK_ERRORS,
    errors
  }
}

//THUNK ACTION CREATORS
export const fetchTank = tankId => dispatch => {
  TankAPIUtil.fetchTank(tankId)
    .then(tank => dispatch(receiveTank(tank.data)))
}

export const fetchUserTanks = userId => dispatch => {
  TankAPIUtil.fetchUserTanks(userId)
    .then(tanks => dispatch(receiveTanks(tanks.data)))
}

export const createTank = tankData => dispatch => {
  TankAPIUtil.createTank(tankData).then(
    tank => (dispatch(receiveTank(tank.data))
  ), err => (
    dispatch(receiveErrors(err.response.data))
  ))
}