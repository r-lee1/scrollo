export const getFollowUsers = () => {
  return $.ajax({
    url: '/api/follows'
  });
};

export const createFollow = (follow) => {
  return $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: { follow }
  });
};
