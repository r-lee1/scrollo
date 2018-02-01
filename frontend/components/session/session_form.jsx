import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {
      username: "guest",
      password: "password"
    };
    this.props.login(user);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
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
          <button onClick={this.handleDemo}>Demo</button>
        </form>
      </div>
      );
  }
}
 export default SessionForm;
