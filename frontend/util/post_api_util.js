export const getPosts = () => {
  return $.ajax({
    url: '/api/posts'
  });
};

export const createPost = (newPost) => {
  return $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: { post: newPost }
  });
};

export const deletePost = (postId) => {
  return $.ajax({
      url: `api/posts/${postId}`,
      method: 'DELETE'
  });
};
