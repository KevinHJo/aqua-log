import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const UsersReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      //Change this after testing
      return state;
    default:
      return state;
  }
}

export default UsersReducer