import * as PostApiUtil from '../util/post_api_util';
import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_A_POST = "RECEIVE_A_POST";
export const REMOVE_A_POST = "REMOVE_A_POST";

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

const removeAPost = (post) => {
  return ({
    type: REMOVE_A_POST,
    postId: post.id
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

export const updatePost = (post) => (dispatch) => {
  return PostApiUtil.updatePost(post)
    .then((serverPost) => dispatch(receiveAPost(serverPost)));
};

export const deletePost = (postId) => (dispatch) => {
  return PostApiUtil.deletePost(postId)
    .then((serverPost) => dispatch(removeAPost(serverPost)));
};

export const createLike = (postId) => (dispatch) => {
  return LikeApiUtil.createLike(postId)
    .then((serverPost) => dispatch(receiveAPost(serverPost)));
};

export const deleteLike = (postId) => (dispatch) => {
  return LikeApiUtil.deleteLike(postId)
    .then((serverPost) => dispatch(receiveAPost(serverPost)));
};
