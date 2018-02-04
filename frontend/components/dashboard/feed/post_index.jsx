import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts();
    console.log("component mounted");
  }


  render() {
    return (
      <div>
        <ul className="feed">
            {this.props.posts.reverse().map(
              post => { return <PostIndexItem key={post.id} post={post} />;}
            )}
        </ul>
      </div>
    );
  }
}

export default PostIndex;


//bug:
//posts reversing everytime component is rendered