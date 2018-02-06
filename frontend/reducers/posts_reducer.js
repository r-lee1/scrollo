import {
  RECEIVE_POSTS,
  RECEIVE_A_POST,
  REMOVE_A_POST
 } from '../actions/post_actions';

 import { merge } from 'lodash';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      let newState = {};
      action.posts.forEach(post => { newState[post.id] = post; });
      return newState;
    case RECEIVE_A_POST:
      let newPost = { [action.post.id]: action.post };
      return merge({}, state, newPost);
    case REMOVE_A_POST:
      newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
