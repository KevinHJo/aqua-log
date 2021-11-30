import { RECEIVE_TANK, RECEIVE_TANKS } from "../../actions/tank_actions";

const TanksReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TANK:
      nextState[action.tank._id] = action.tank;
      return nextState;
    case RECEIVE_TANKS:
      action.tanks.forEach(tank => nextState[tank._id] = tank);
      return nextState;
    default:
      return state;
  }
}

export default TanksReducer