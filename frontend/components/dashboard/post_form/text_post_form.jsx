import React from 'react';
import { Link } from 'react-router-dom';

class TextPostForm extends React.Component {
  constructor(props) {
    super(props);

    if (props.match.path === "/dashboard/edit/text/:postId") {
      this.state = this.props.post;
    } else {
      this.state = {
        post_type: "text",
        title: "",
        body: ""
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.postButtonVisible = this.postButtonVisible.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actionPost(this.state).then(() => this.props.history.push('/dashboard'));
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  postButtonVisible() {
    if (this.state.title === "" && this.state.body === "") {
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
            <Link to="/dashboard"><button className="post-form-btn-close">Close</button></Link>
            <button
              onClick={this.handleSubmit}
              className={this.postButtonVisible()}>
              {this.props.actionButton}
              </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TextPostForm;
