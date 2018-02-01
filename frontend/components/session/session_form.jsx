import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
          <input
            onChange={this.handleInput("username")}
            type="text"
            value={this.state.username}></input>
          </label>
          <label>Password:
          <input
            onChange={this.handleInput("password")}
            type="text"
            value={this.state.password}></input>
          </label>
          <button>Sign In</button>
        </form>
      </div>
      );
  }
}
 export default SessionForm;
