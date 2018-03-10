import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const {currentUser, logout, location} = props;

  function topFunction() {
      window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  if (currentUser) {
    return (
      <div className="navbar">
        <a href="/#/dashboard" id="logo" onClick={topFunction}><h1 className="navbar-logo"><i className="fab fa-stripe-s"></i></h1></a>
        <div className="navbar-right">
          <h3 className="navbar-greeting">Hello, {currentUser.username}</h3>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </div>
    );
  }
  if (location.pathname === '/signup') {
    return (
      <div className="navbar">
        <Link to="/login"><button className="sign-btn">Log In</button></Link>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <Link to="/signup"><button className="sign-btn">Sign Up</button></Link>
      </div>
    );
  }

};

export default NavBar;
