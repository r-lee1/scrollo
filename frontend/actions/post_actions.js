import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_A_POST = "RECEIVE_A_POST";

const receivePosts = (posts) => {
  return ({
    type: RECEIVE_POSTS,
    posts
  });
};

const receiveAPost = (post) => {
  return ({
    type: RECEIVE_A_POST,
    post
  });
};

export const fetchPosts = () => (dispatch) => {
  return PostApiUtil.getPosts()
    .then((serverPosts) => dispatch(receivePosts(serverPosts)));
};

export const createPost = (post) => (dispatch) => {
  return PostApiUtil.createPost(post)
    .then((serverPost) => dispatch(receiveAPost(serverPost)));
};