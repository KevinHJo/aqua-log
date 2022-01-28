import { fetchUserTanks, createTank } from "../../actions/tank_actions";
import { connect } from 'react-redux';
import HomePage from './home_page';

const mSTP = state => {
  return {
    currentUser: state.session.user,
    userTanks: Object.values(state.entities.tanks)
  }
}

const mDTP = dispatch => {
  return {
    fetchUserTanks: userId => dispatch(fetchUserTanks(userId)),
    createTank: tank => dispatch(createTank(tank))
  }
}

export default connect(mSTP, mDTP)(HomePage)