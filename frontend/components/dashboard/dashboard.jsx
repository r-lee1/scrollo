import React from 'react';
import PostIndexContainer from './feed/post_index_container';
import FollowUsersIndexContainer from './recommended_blogs/follow_users_index_container';
import TextPostFormContainer from './post_form/text_post_form_container';
import PhotoPostFormContainer from './post_form/photo_post_form_container';
import QuotePostFormContainer from './post_form/quote_post_form_container';
import LinkPostFormContainer from './post_form/link_post_form_container';
import AudioPostFormContainer from './post_form/audio_post_form_container';
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
      <div className="dashboard-content">
        <div className="feed">
          <ul className="post-navbar">
            <button className="post-navbar-btn">
              <Link to="/dashboard/new/text" style={{textDecoration: 'none'}}>
                <div>
                  <i className="fas fa-font"></i>
                </div>
                <span>Text</span>
              </Link>
            </button>
            <button className="post-navbar-btn">
              <Link to="/dashboard/new/photo" style={{textDecoration: 'none'}}>
                <div>
                  <i className="fas fa-camera-retro"></i>
                </div>
                <span>Photo</span>
              </Link>
            </button>
            <button className="post-navbar-btn">
              <Link to="/dashboard/new/quote" style={{textDecoration: 'none'}}>
                <div>
                  <i className="fas fa-quote-left"></i>
                </div>
                <span>Quote</span>
            </Link>
          </button>
            <button className="post-navbar-btn">
              <Link to="/dashboard/new/link" style={{textDecoration: 'none'}}>
                <div>
                  <i className="fas fa-link"></i>
                </div>
                <span>Link</span>
            </Link>
          </button>
            <button className="post-navbar-btn">
              <Link to="/dashboard/new/audio" style={{textDecoration: 'none'}}>
                <div>
                  <i className="fas fa-headphones "></i>
                </div>
                <span>Audio</span>
            </Link>
          </button>
            <button className="post-navbar-btn">
              <Link to="/dashboard/new/video" style={{textDecoration: 'none'}}>
                <div>
                  <i className="fas fa-video"></i>
                </div>
                <span>Video</span>
            </Link>
          </button>
          </ul>
          <ProtectedRoute exact path="/dashboard/new/text" component={TextPostFormContainer} />
          <ProtectedRoute exact path="/dashboard/edit/text/:postId" component={TextPostFormContainer} />
          <ProtectedRoute exact path="/dashboard/new/photo" component={PhotoPostFormContainer} />
          <ProtectedRoute exact path="/dashboard/edit/photo/:postId" component={PhotoPostFormContainer} />
          <ProtectedRoute exact path="/dashboard/new/quote" component={QuotePostFormContainer} />
          <ProtectedRoute exact path="/dashboard/edit/quote/:postId" component={QuotePostFormContainer} />
          <ProtectedRoute exact path="/dashboard/new/link" component={LinkPostFormContainer} />
          <ProtectedRoute exact path="/dashboard/edit/link/:postId" component={LinkPostFormContainer} />
          <ProtectedRoute exact path="/dashboard/new/audio" component={AudioPostFormContainer} />
          <ProtectedRoute exact path="/dashboard/edit/audio/:postId" component={AudioPostFormContainer} />
          <ProtectedRoute exact path="/dashboard/new/video" component={VideoPostFormContainer} />
          <ProtectedRoute exact path="/dashboard/edit/video/:postId" component={VideoPostFormContainer} />
          <PostIndexContainer props={this.props} />
        </div>
        <div className="right-side-bar">
          <FollowUsersIndexContainer props={this.props} />
        </div>
      </div>
    );
  }

}

export default Dashboard;
