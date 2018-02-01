import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( {currentUser, logout} ) => {
  if (currentUser) {
    return (
      <div>
        <h3>Hello, {currentUser.username}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  return (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default NavBar;
