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

  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.updateInput("title")}
            placeholder="Title"
            value={this.state.title}>
          </input>
          <textarea
            onChange={this.updateInput("body")}
            placeholder="Your text here"
            value={this.state.body}/>
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default TextPostForm;
