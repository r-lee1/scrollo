export const createLike = (postId) => {
  return $.ajax({
    url: `/api/posts/${postId}/likes`,
    method: 'POST'
  });
};

export const deleteLike = (postId) => {
  return $.ajax({
    url: `/api/posts/${postId}/likes`,
    method: 'DELETE'
  });
};
