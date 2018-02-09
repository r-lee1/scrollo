export const createLike = (postId) => {
  return $.ajax({
    url: `/api/posts/${postId}/likes`,
    method: 'POST'
  });
};
