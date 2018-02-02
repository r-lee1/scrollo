export const getPosts = () => {
  return $.ajax({
    url: '/api/posts'
  });
};
