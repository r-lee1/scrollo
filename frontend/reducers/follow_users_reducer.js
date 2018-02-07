import {
  RECEIVE_FOLLOW_USERS
} from '../actions/follow_actions';

const FollowUsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FOLLOW_USERS:
      let newState = {};
      action.followUsers.forEach(user => { newState[user.id] = user; });
      return newState;
    default:
      return state;
  }
};

export default FollowUsersReducer;
