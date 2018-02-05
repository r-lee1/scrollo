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
              <h2 className="post-author">{this.props.post.author}</h2>
              <h3>{this.props.post.title}</h3>
              <p>{this.props.post.body}</p>
            </div>
          </li>
        );
    } else {
      return (
          <li>
            <div className="post">
              <h2 className="post-author">{this.props.post.author}</h2>
              <img src={`${this.props.post.source}`} />
              <p>{this.props.post.body}</p>
            </div>
          </li>
        );
    }
    }
  }





export default PostIndexItem;
