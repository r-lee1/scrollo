import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW_USERS = "RECEIVE_FOLLOW_USERS";

const receiveFollowUsers = (followUsers) => {
  return ({
    type: RECEIVE_FOLLOW_USERS,
    followUsers
  });
};

export const fetchFollowUsers = () => (dispatch) => {
  return FollowApiUtil.getFollowUsers()
    .then((serverFollowUsers) => dispatch(receiveFollowUsers(serverFollowUsers)));
};

export const createFollow = (follow) => (dispatch) => {
  return FollowApiUtil.createFollow(follow)
    .then((serverFollowUsers) => dispatch(receiveFollowUsers(serverFollowUsers)));
};
