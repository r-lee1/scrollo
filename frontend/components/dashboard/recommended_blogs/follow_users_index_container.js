import React from 'react';
import { connect } from 'react-redux';
import FollowUsersIndex from './follow_users_index';

import { fetchFollowUsers, createFollow } from '../../../actions/follow_actions';

const mapStateToProps = (state) => {
  return {
    followUsers: Object.values(state.entities.followUsers),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFollowUsers: () => dispatch(fetchFollowUsers()),
    createFollow: (follow) => dispatch(createFollow(follow))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowUsersIndex);
