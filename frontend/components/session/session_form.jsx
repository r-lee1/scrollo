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
      <div className="form-page">
        <div className="session-form-container">
          <h1 className="logo">scrollo.</h1>
          <form className="session-form" onSubmit={this.handleSubmit}>
            <div className="session-form-input">
              {this.renderErrors()}
              <label>Username:
              <input
                placeholder="Username"
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
            </div>
            <div className="session-form-btn">
              <button>Sign In</button>
              <button onClick={this.handleDemo}>Demo</button>
            </div>
          </form>
        </div>
      </div>
      );
  }
}
 export default SessionForm;
