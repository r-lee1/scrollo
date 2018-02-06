import React from 'react';
import PostIndexContainer from './feed/post_index_container';
import TextPostFormContainer from './post_form/text_post_form_container';
import PhotoPostFormContainer from './post_form/photo_post_form_container';
import QuotePostFormContainer from './post_form/quote_post_form_container';
import VideoPostFormContainer from './post_form/video_post_form_container';
import { Link, Route } from 'react-router-dom';

import {
  AuthRoute,
  ProtectedRoute
} from '../../util/route_utils';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="post-navbar">
          <button className="post-navbar-btn">
            <Link to="/new/text" style={{textDecoration: 'none'}}>
              <div>
                <i className="fas fa-font"></i>
              </div>
              <span>Text</span>
            </Link>
          </button>
          <button className="post-navbar-btn">
            <Link to="/new/photo" style={{textDecoration: 'none'}}>
              <div>
                <i className="fas fa-camera-retro"></i>
              </div>
              <span>Photo</span>
            </Link>
          </button>
          <button className="post-navbar-btn">
            <Link to="/new/quote" style={{textDecoration: 'none'}}>
              <div>
                <i className="fas fa-quote-left"></i>
              </div>
              <span>Quote</span>
          </Link>
        </button>
          <button className="post-navbar-btn">
            <Link to="/new/link" style={{textDecoration: 'none'}}>
              <div>
                <i className="fas fa-link"></i>
              </div>
              <span>Link</span>
          </Link>
        </button>
          <button className="post-navbar-btn">
            <Link to="/new/chat" style={{textDecoration: 'none'}}>
              <div>
                <i className="fas fa-comment-alt"></i>
              </div>
              <span>Chat</span>
          </Link>
        </button>
          <button className="post-navbar-btn">
            <Link to="/new/audio" style={{textDecoration: 'none'}}>
              <div>
                <i className="fas fa-headphones "></i>
              </div>
              <span>Audio</span>
          </Link>
        </button>
          <button className="post-navbar-btn">
            <Link to="/new/video" style={{textDecoration: 'none'}}>
              <div>
                <i className="fas fa-video"></i>
              </div>
              <span>Video</span>
          </Link>
        </button>
        </ul>
        <ProtectedRoute exact path ="/new/text" component={TextPostFormContainer} />
        <ProtectedRoute exact path ="/new/photo" component={PhotoPostFormContainer} />
        <ProtectedRoute exact path ="/new/quote" component={QuotePostFormContainer} />
        <ProtectedRoute exact path ="/new/video" component={VideoPostFormContainer} />
        <PostIndexContainer props={this.props} />
      </div>
    );
  }

}

export default Dashboard;
