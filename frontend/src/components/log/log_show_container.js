import { connect } from "react-redux";
import LogShow from './log_show';

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.session.user
  }
}

const mDTP = (dispatch) => {
  return {

  }
}

export default connect(mSTP, mDTP)(LogShow)