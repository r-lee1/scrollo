import React from 'react';
import { connect } from 'react-redux';
import AudioPostForm from './audio_post_form';
import LinkPostForm from './link_post_form';
import PhotoPostForm from './photo_post_form';
import QuotePostForm from './quote_post_form';
import TextPostForm from './text_post_form';
import VideoPostForm from './video_post_form';

import { createPost, updatePost } from '../../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.path.includes("edit")) {
    return ({
      post: state.entities.posts[ownProps.match.params.postId],
      actionButton: "Edit"
    });
  } else {
    return ({
      post: {},
      actionButton: "Post"
    });
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let actionPost = ownProps.match.path.includes("edit") ? updatePost : createPost;
  return {
    actionPost: (post) => dispatch(actionPost(post))
  };
};


const postFormContainerCreator = connect(mapStateToProps, mapDispatchToProps);

export const AudioPostFormContainer = postFormContainerCreator(AudioPostForm);
export const LinkPostFormContainer = postFormContainerCreator(LinkPostForm);
export const PhotoPostFormContainer = postFormContainerCreator(PhotoPostForm);
export const QuotePostFormContainer = postFormContainerCreator(QuotePostForm);
export const TextPostFormContainer = postFormContainerCreator(TextPostForm);
export const VideoPostFormContainer = postFormContainerCreator(VideoPostForm);
