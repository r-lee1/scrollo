import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts();

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.posts.length !== nextProps.posts.length) {
      this.props.fetchPosts();
    }
  }

  render() {
    return (
      <div>
        <ul className="feed">
            {this.props.posts.map(
              post => { return <PostIndexItem
                                  key={post.id}
                                  post={post}
                                  liked={post.current_user_likes}
                                  currentUser={this.props.currentUser}
                                  deletePost={this.props.deletePost}
                                  deleteFollow={this.props.deleteFollow}
                                  fetchPosts={this.props.fetchPosts}
                                  createLike={this.props.createLike}
                                  deleteLike={this.props.deleteLike}/>;}
            )}
        </ul>
      </div>
    );
  }
}

export default PostIndex;
