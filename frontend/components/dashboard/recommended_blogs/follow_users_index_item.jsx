import React from 'react';

class FollowUsersIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>
        <div>
          <h4>{this.props.user.username}</h4>
          <button>+</button>
        </div>
      </li>
    );
  }
}

export default FollowUsersIndexItem;
