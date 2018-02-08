import React from 'react';
import { Link } from 'react-router-dom';

class LinkPostForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.match.path === "/edit/link/:postId") {
      this.state = this.props.post;
    } else {
      this.state = {
        post_type: "link",
        title: "",
        body: ""
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return(
      <div className="post-form">
        <form>
          <div className="post-form-content">
            <textarea
              className="post-form-link-url"
              onChange={this.updateInput("source")}
              placeholder="Insert URL"
              value={this.state.source}
            />
            <textarea
              className="post-form-link-description"
              onChange={this.updateInput("body")}
              placeholder="Description"
              value={this.state.body}/>
          </div>
          <div className="post-form-btn-bar">
            <Link to="/"><button className="post-form-btn-close">Close</button></Link>
            <button onClick={this.handleSubmit} className="post-form-btn-post">{this.props.actionButton}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LinkPostForm;
