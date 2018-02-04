import React from 'react';
import PostIndexContainer from './feed/post_index_container';
import TextPostFormContainer from './post_form/text_post_form_container';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <ul className="post-navbar">
          <button>
            <Link to="/new/text">
              <i className="fas fa-font"></i>Text
            </Link>
          </button>
          <button>
            <Link to="/new/photo">
              <i className="fas fa-camera-retro"></i>Photo
            </Link>
          </button>
          <button>
            <Link to="/new/quote">
              <i className="fas fa-quote-left"></i>Quote
          </Link>
        </button>
          <button>
            <Link to="/new/link">
              <i className="fas fa-link"></i>Link
          </Link>
        </button>
          <button>
            <Link to="/new/chat">
              <i className="fas fa-comment-alt"></i>Chat
          </Link>
        </button>
          <button>
            <Link to="/new/audio">
              <i className="fas fa-headphones"></i>Audio
          </Link>
        </button>
          <button>
            <Link to="/new/video">
              <i className="fas fa-video"></i>Video
          </Link>
        </button>
        </ul>
        <PostIndexContainer props={this.props} />
      </div>
    );
  }

}

export default Dashboard;
