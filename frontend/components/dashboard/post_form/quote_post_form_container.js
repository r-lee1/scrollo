import React from 'react';
import { connect } from 'react-redux';
import QuotePostForm from './quote_post_form';

import { createPost } from '../../../actions/post_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  };
};

export default connect(null, mapDispatchToProps)(QuotePostForm);
