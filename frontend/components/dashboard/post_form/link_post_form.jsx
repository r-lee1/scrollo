import React from 'react';

class LinkPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post_type: "link",
      title: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
    this.setState({
      post_type: "link",
      source: "",
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
            <textarea
              className="post-form-link-url"
              onChange={this.updateInput("source")}
              placeholder="URL"
              value={this.state.source}
            />
            <textarea
              className="post-form-link-description"
              onChange={this.updateInput("body")}
              placeholder="Description"
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

export default LinkPostForm;
