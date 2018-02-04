import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  AuthRoute,
  ProtectedRoute
 } from '../util/route_utils';

 import NavBarContainer from './nav_bar/nav_bar_container';
 import SignupContainer from './session/signup_container';
 import SessionFormContainer from './session/session_form_container';
 import DashboardContainer from './dashboard/dashboard_container';
 import TextPostFormContainer from './dashboard/post_form/text_post_form_container';

const App = () => {
  return (
    <div>
      <header>
        <Route component={NavBarContainer} />
      </header>
      <ProtectedRoute path ="/" component={DashboardContainer} />
      <Switch>
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/login" component={SessionFormContainer} />
        <ProtectedRoute exact path ="/new/text" component={TextPostFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
