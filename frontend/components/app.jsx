import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute
 } from '../util/route_utils';


const App = () => {
  return (
    <div>
      <header>
        <h1>Scrollo</h1>
        <NavBarContainer />
      </header>
      <AuthRoute path="/signup" component={SignupContainer} />
    </div>
  );
};

export default App;
