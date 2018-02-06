import React from 'react';

class TextPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post_type: "text",
      title: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
    this.setState({
      post_type: "text",
      title: "",
      body: ""
    });
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return(
      <div className="post-form">
        <form>
          <div className="post-form-content">
            <input
              className="post-form-text-title"
              onChange={this.updateInput("title")}
              placeholder="Title"
              value={this.state.title}>
            </input>
            <textarea
              className="post-form-text-body"
              onChange={this.updateInput("body")}
              placeholder="Your text here"
              value={this.state.body}/>
          </div>
          <div className="post-form-btn-bar">
            <button className="post-form-btn-close">Close</button>
            <button onClick={this.handleSubmit} className="post-form-btn-post">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TextPostForm;
