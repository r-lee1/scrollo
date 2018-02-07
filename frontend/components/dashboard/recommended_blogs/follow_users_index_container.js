import React from 'react';
import { connect } from 'react-redux';
import FollowUsersIndex from './follow_users_index';

import { fetchFollowUsers } from '../../../actions/follow_actions';

const mapStateToProps = (state) => {
  return {
    followUsers: Object.values(state.entities.followUsers)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFollowUsers: () => dispatch(fetchFollowUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowUsersIndex);
