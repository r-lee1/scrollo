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
      <ul>
        <h3>RECOMMENDED BLOGS</h3>
        {this.props.followUsers.map(
          user => {
          return <FollowUsersIndexItem key={user.id} user={user} />;}
        )}
      </ul>
    );
  }
}

export default FollowUsersIndex;
