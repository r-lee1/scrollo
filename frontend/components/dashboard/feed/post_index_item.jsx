import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    const {post} = props;
  }

  render() {
    return (
        <li>
          <img src={`${this.props.post.source}`} />
          <p>{this.props.post.body}</p>
        </li>
      );
    }
  }





export default PostIndexItem;
