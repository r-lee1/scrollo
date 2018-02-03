import React from 'react';
import PostIndexItem from './post_index_item';

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
        <ul>
            {this.props.posts.map(
              post => { return <PostIndexItem key={post.id} post={post} />;}
            )}
        </ul>
      </div>
    );
  }
}

export default PostIndex;
