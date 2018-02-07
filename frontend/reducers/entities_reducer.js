import { combineReducers } from 'redux';

import PostsReducer from './posts_reducer';
import FollowUsersReducer from './follow_users_reducer';

const EntitiesReducer = combineReducers({
  posts: PostsReducer,
  followUsers: FollowUsersReducer
});

export default EntitiesReducer;
