import React from 'react';
import { connect } from 'react-redux';
import FollowUsersIndex from './follow_users_index';

import { fetchFollowUsers, createFollow } from '../../../actions/follow_actions';
import { fetchPosts } from '../../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    followUsers: Object.values(state.entities.followUsers),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFollowUsers: () => dispatch(fetchFollowUsers()),
    createFollow: (follow) => dispatch(createFollow(follow)),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowUsersIndex);
