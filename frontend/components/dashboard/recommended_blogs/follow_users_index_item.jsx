import React from 'react';

class FollowUsersIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="follow-users-item">
        <div className="follow-users-item-content">
          <h4 className="follow-users-item-username">{this.props.user.username}</h4>
          <button className="follow-users-item-btn"><i className="fas fa-plus-square"></i></button>
        </div>
      </li>
    );
  }
}

export default FollowUsersIndexItem;
