import React from 'react';
import { Link } from 'react-router-dom';

class QuotePostForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.match.path === "/edit/quote/:postId") {
      this.state = this.props.post;
    } else {
      this.state = {
        post_type: "quote",
        body: "",
        source: ""
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.postButtonVisible = this.postButtonVisible.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actionPost(this.state).then(() => this.props.history.push('/'));
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  postButtonVisible() {
    if (this.state.body === "") {
      return "post-form-btn-post-hidden";
    } else {
      return "post-form-btn-post";
    }
  }

  render() {
    return(
      <div className="post-form">
        <form>
          <div className="post-form-content">
            <textarea
              className="post-form-quote-body"
              onChange={this.updateInput("body")}
              placeholder='"Quote"'
              value={this.state.body}/>
            <input
              className="post-form-quote-source"
              onChange={this.updateInput("source")}
              placeholder="Source"
              value={this.state.source}>
            </input>
          </div>
          <div className="post-form-btn-bar">
            <Link to="/"><button className="post-form-btn-close">Close</button></Link>
            <button onClick={this.handleSubmit} className={this.postButtonVisible()}>{this.props.actionButton}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default QuotePostForm;
