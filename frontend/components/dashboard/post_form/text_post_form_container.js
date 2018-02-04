import React from 'react';
import { connect } from 'react-redux';
import TextPostForm from './text_post_form';

import { createPost } from '../../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    post_type: ownProps.match
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextPostForm);
