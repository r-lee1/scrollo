import React from 'react';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
            {this.props.posts.map(
              post => { return  <img src={`${post.source}`} />;}
            )}
      </div>
    );
  }
}

export default PostIndex;
