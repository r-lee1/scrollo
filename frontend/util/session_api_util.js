export const postUser = (newUser) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user: newUser }
  });
};

export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user: user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
