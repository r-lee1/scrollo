import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.post.post_type === "text") {
      return (
          <li>
            <div className="post">
              <h4 className="post-author">{this.props.post.author}</h4>
              <h2>{this.props.post.title}</h2>
              <p>{this.props.post.body}</p>
            </div>
          </li>
        );
    } else {
      return (
          <li>
            <div className="post">
              <h4 className="post-author">{this.props.post.author}</h4>
              <img className="post-photo" src={`${this.props.post.source}`} />
              <p className="post-body">{this.props.post.body}</p>
            </div>
          </li>
        );
    }
    }
  }





export default PostIndexItem;
