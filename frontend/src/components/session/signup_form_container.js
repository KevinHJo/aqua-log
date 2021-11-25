import { connect } from "react-redux";
import { removeErrors, signup } from "../../actions/session_actions";
import SignupForm from './signup_form.jsx';
import { receiveErrors } from '../../actions/session_actions'

const mSTP = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mDTP = (dispatch) => {
  return {
    signup: (user, history) => {
      dispatch(signup(user))
        .then(history.push('/home'))
        .catch(history.push('/signup'))
    },
    receiveErrors: (errors) => {
      dispatch(receiveErrors(errors))
    },
    removeErrors: () => {
      dispatch(removeErrors())
    }
  };
};

export default connect(mSTP, mDTP)(SignupForm);