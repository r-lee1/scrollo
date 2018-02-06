import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.removePost = this.removePost.bind(this);
  }

  removePost(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }

  render() {
    if (this.props.post.post_type === "text") {
      return (
          <li>
            <div className="post">
              <div className="post-util-bar">
                <h4 className="post-author">{this.props.post.author}</h4>
                <button className="post-delete-btn" onClick={this.removePost}>X</button>
              </div>
              <h2 className="post-title">{this.props.post.title}</h2>
              <p className="post-body">{this.props.post.body}</p>
            </div>
          </li>
        );
    } else {
      return (
          <li>
            <div className="post">
              <div className="post-util-bar">
                <h4 className="post-author">{this.props.post.author}</h4>
                <button className="post-delete-btn" onClick={this.removePost}>X</button>
              </div>
              <img className="post-photo" src={`${this.props.post.source}`} />
              <p className="post-body">{this.props.post.body}</p>
            </div>
          </li>
        );
    }
    }
  }




export default PostIndexItem;
