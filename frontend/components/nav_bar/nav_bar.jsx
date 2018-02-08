import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const {currentUser, logout, location} = props;
  if (currentUser) {
    return (
      <div className="navbar">
        <h3 className="navbar-greeting">Hello, {currentUser.username}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  if (location.pathname === '/signup') {
    return (
      <div className="navbar">
        <Link to="/login"><button>Log In</button></Link>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    );
  }
};

export default NavBar;
