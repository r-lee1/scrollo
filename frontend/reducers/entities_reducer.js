import { combineReducers } from 'redux';

import PostsReducer from './posts_reducer';

const EntitiesReducer = combineReducers({
  posts: PostsReducer
});

export default EntitiesReducer;
