import React from 'react';
import { connect } from 'react-redux';
import PostIndex from './post_index';

import { fetchPosts, deletePost } from '../../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts).reverse()
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (postId) => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
