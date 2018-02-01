import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( {currentUser, logout} ) => {
  if (currentUser) {
    return (
      <div className="navbar">
        <h3>Hello, {currentUser.username}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  return (
    <div className="navbar">
      <Link to="/signup"><button>Sign Up</button></Link>
      <Link to="/login"><button>Log In</button></Link>
    </div>
  );
};

export default NavBar;
