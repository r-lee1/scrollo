import React from 'react';
import FollowUsersIndexItem from './follow_users_index_item';

class FollowUsersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFollowUsers();
  }

  render() {
    return (
      <ul className="recommended-blogs">
        <h3 className="recommended-blogs-heading">RECOMMENDED BLOGS</h3>
        {this.props.followUsers.map(
          user => {
          return <FollowUsersIndexItem
                  key={user.id}
                  user={user}
                  createFollow={this.props.createFollow}
                  currentUser={this.props.currentUser}
                  fetchPosts={this.props.fetchPosts}/>;}
        )}
      </ul>
    );
  }
}

export default FollowUsersIndex;
