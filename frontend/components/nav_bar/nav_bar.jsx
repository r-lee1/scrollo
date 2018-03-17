import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // const {currentUser, logout, location} = props;
  }

  // topFunction() {
  //   window.scroll({
  //   top: 0,
  //   left: 0,
  //   behavior: 'smooth'
  //   });
  // }

  refreshPage() {
    window.location.reload();
  }

  // componentDidMount() {
  //   $('.navbar-logo').hover(
  //        function(){ $(this).addClass('navbar-logo-animate'); }
  //        // function(){ $(this).removeClass('navbar-logo-animate') };
  //     );
  // }

  render () {
    if (this.props.currentUser) {
      return (
        <div className="navbar">
          <a href="/#/dashboard" id="logo" onClick={this.refreshPage}><h1 className="navbar-logo"><i className="fab fa-stripe-s"></i></h1></a>
          <div className="navbar-right">
            <h3 className="navbar-greeting">Hello, {this.props.currentUser.username}</h3>
            <button className="logout-btn" onClick={this.props.logout}>Logout</button>
          </div>
        </div>
      );
    }
    if (this.props.location.pathname === '/signup') {
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
  }

}

export default NavBar;
