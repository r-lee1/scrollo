import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatchToProps = (dispatch) => {
  return ({
    createNewUser: (newUser) => dispatch(createNewUser(newUser))
  });
};

export default connect(null, mapDispatchToProps)(Signup);
