import React from 'react';

class QuotePostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post_type: "quote",
      body: "",
      source: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
    this.setState({
      post_type: "quote",
      body: "",
      source: ""
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
              className="post-form-quote-body"
              onChange={this.updateInput("body")}
              placeholder="Quote"
              value={this.state.body}/>
            <input
              className="post-form-quote-source"
              onChange={this.updateInput("source")}
              placeholder="Source"
              value={this.state.source}>
            </input>
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

export default QuotePostForm;
