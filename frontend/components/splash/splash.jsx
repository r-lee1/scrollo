import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="splash-content">
        <div className="splash-bg"></div>
        <div className="splash-center">
          <h1>Scrollo.</h1>
          <p>Self expression and discovery in multimedia blogs.</p>
          <Link to="/dashboard"><button className="splash-start">Get Started</button></Link>
        </div>
      </div>
    );
  }

}

export default Splash;
