import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="splash-content">
        <img className="splash-img" src="https://res.cloudinary.com/dxyit2phe/image/upload/v1520720604/bogdan-dada-156739-unsplash_sarzuj.jpg"></img>
        <div className="splash-center">
          <h1>Scrollo.</h1>
          <p>Self expression and discovery through multimedia blogs.</p>
          <button className="splash-start">Start</button>
        </div>
      </div>
    );
  }

}

export default Splash;
