import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
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
          <label>Email:
          <input
            onChange={this.handleInput("email")}
            type="text"
            value={this.state.email}></input>
          </label>
          <label>Password:
          <input
            onChange={this.handleInput("password")}
            type="text"
            value={this.state.password}></input>
          </label>
          <button>Create Account</button>
        </form>
      </div>
      );
  }
}
 export default Signup;
