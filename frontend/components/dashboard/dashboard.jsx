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
              <i className="fas fa-font"></i>
              <span>Text</span>
            </Link>
          </button>
          <button>
            <Link to="/new/photo">
              <i className="fas fa-camera-retro"></i>
              <span>Photo</span>
            </Link>
          </button>
          <button>
            <Link to="/new/quote">
              <i className="fas fa-quote-left"></i>
              <span>Quote</span>
          </Link>
        </button>
          <button>
            <Link to="/new/link">
              <i className="fas fa-link"></i>
              <span>Link</span>
          </Link>
        </button>
          <button>
            <Link to="/new/chat">
              <i className="fas fa-comment-alt"></i>
              <span>Chat</span>
          </Link>
        </button>
          <button>
            <Link to="/new/audio">
              <i className="fas fa-headphones"></i>
              <span>Audio</span>
          </Link>
        </button>
          <button>
            <Link to="/new/video">
              <i className="fas fa-video"></i>
              <span>Video</span>
          </Link>
        </button>
        </ul>
        <PostIndexContainer props={this.props} />
      </div>
    );
  }

}

export default Dashboard;
