import React from 'react';
import { connect } from 'react-redux';
import PostIndex from './post_index';

import {
  fetchPosts,
  deletePost,
  createLike } from '../../../actions/post_actions';

import { deleteFollow } from '../../../actions/follow_actions';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId)),
  deleteFollow: (postId) => dispatch(deleteFollow(postId)),
  createLike: (postId) => dispatch(createLike(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
