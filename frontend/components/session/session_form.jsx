import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {
      email: "guest@email.com",
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
        <div className="form-page">
          <div className="session-form-container">
            <h1 className="logo">scrollo.</h1>
            <form className="session-form" onSubmit={this.handleSubmit}>
              <div className="session-form-input">
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
                  type="password"
                  value={this.state.password}></input>
                </label>
              </div>
              {this.renderErrors()}
              <div className="session-form-btn">
                <button>Log In</button>
                <button onClick={this.handleDemo}>Demo</button>
              </div>
            </form>
          </div>
        </div>
        );
      }
    }
 export default SessionForm;
