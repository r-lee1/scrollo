import React from 'react';

class FollowUsersIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.makeFollow = this.makeFollow.bind(this);
  }

  makeFollow() {

    let followEntry = {
        "follower_id": this.props.currentUser.id,
        "followee_id": this.props.user.id
    };

    this.props.createFollow(followEntry);
  }

  render() {
    return(
      <li className="follow-users-item">
        <div className="follow-users-item-content">
          <h4 className="follow-users-item-username">{this.props.user.username}</h4>
          <button onClick={this.makeFollow} className="follow-users-item-btn"><i className="fas fa-plus-square"></i></button>
        </div>
      </li>
    );
  }
}

export default FollowUsersIndexItem;
