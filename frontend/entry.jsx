import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { createPost } from './actions/post_actions';
import { fetchFollowUsers } from './actions/follow_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
  let store;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createPost = createPost;
  window.fetchFollowUsers = fetchFollowUsers;

  ReactDOM.render(<Root store={store} />, root);
});
