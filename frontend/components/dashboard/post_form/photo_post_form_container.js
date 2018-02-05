import React from 'react';
import { connect } from 'react-redux';
import PhotoPostForm from './photo_post_form';

import { createPost } from '../../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPostForm);