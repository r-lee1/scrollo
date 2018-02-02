import React from 'react';
import PostIndexContainer from './feed/post_index_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PostIndexContainer props={this.props} />
      </div>
    );
  }

}

export default Dashboard;
