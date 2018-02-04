import {
  RECEIVE_POSTS,
  RECEIVE_A_POST
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
    default:
      return state;
  }
};

export default PostsReducer;
