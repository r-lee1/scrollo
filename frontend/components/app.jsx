import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import SessionFormContainer from './session/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import { Route, Switch } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute
 } from '../util/route_utils';


const App = () => {
  return (
    <div>
      <header>
        <Route component={NavBarContainer} />
      </header>
      <Switch>
        <ProtectedRoute exact path ="/" component={DashboardContainer} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/login" component={SessionFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
