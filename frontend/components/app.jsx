import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  AuthRoute,
  ProtectedRoute
 } from '../util/route_utils';

 import Splash from './splash/splash';
 import NavBarContainer from './nav_bar/nav_bar_container';
 import SignupContainer from './session/signup_container';
 import SessionFormContainer from './session/session_form_container';
 import DashboardContainer from './dashboard/dashboard_container';
 import TextPostFormContainer from './dashboard/post_form/text_post_form_container';
 import Footer from './footer/footer';

const App = () => {
  return (
    <div>
      <header>
        <Route component={NavBarContainer} />
      </header>
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/login" component={SessionFormContainer} />
        <ProtectedRoute path ="/dashboard" component={DashboardContainer} />
      </Switch>
      <footer>
        <Route component={Footer} />
      </footer>
    </div>
  );
};

export default App;
