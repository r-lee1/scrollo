import { RECEIVE_POSTS } from '../actions/post_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      let newState = {};
      action.posts.forEach(post => { newState[post.id] = post; });
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
