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
