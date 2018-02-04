import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    const {post} = props;
  }

  render() {
    if (this.props.post.post_type === "text") {
      return (
          <li>
            <h3>{this.props.post.title}</h3>
            <p>{this.props.post.body}</p>
          </li>
        );
    } else {
      return (
          <li>
            <img src={`${this.props.post.source}`} />
            <p>{this.props.post.body}</p>
          </li>
        );
    }
    }
  }





export default PostIndexItem;
