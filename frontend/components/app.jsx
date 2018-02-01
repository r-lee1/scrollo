import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <header>
        <h1>Scrollo</h1>
        <NavBarContainer />
      </header>
      <Route path="/signup" component={SignupContainer} />
    </div>
  );
};

export default App;
