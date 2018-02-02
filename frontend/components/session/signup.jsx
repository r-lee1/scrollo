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

  componentWillUnmount() {
    this.props.clearErrors();
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
      <ul className="errors-container">
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
        <div className="session-form-container">
          <h1 className="logo">scrollo.</h1>
          <form className="session-form" onSubmit={this.handleSubmit}>
            <div className="session-form-input">
              <label>
              <input
                placeholder="Username"
                onChange={this.handleInput("username")}
                type="text"
                value={this.state.username}></input>
              </label>
              <label>
              <input
                placeholder="Email"
                onChange={this.handleInput("email")}
                type="text"
                value={this.state.email}></input>
              </label>
              <label>
              <input
                placeholder="Password"
                onChange={this.handleInput("password")}
                type="text"
                value={this.state.password}></input>
              </label>
            </div>
            {this.renderErrors()}
            <div className="session-form-btn">
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      );
    }
  }
 export default Signup;
