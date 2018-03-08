import { connect } from 'react-redux';
import { createNewUser, receiveErrors, login } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (newUser) => dispatch(createNewUser(newUser)),
    clearErrors: () => dispatch(receiveErrors([])),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps,
   mapDispatchToProps
 )(Signup);
