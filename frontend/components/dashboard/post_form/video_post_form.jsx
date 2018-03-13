import React from 'react';
import { Link } from 'react-router-dom';

class VideoPostForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.match.path === "/dashboard/edit/video/:postId") {
      this.state = this.props.post;
    } else {
      this.state = {
        post_type: "video",
        source: "",
        body: ""
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadMedia = this.uploadMedia.bind(this);
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

  postMedia(url) {
    this.setState({ ["source"]: url });
  }

  uploadMedia(e) {
    e.preventDefault();
    window.postMedia = this.postMedia.bind(this);
    window.cloudinary.openUploadWidget(
      window.cloudinary_video_options,
      function(errors, result){
        window.postMedia(result[0].secure_url);
      }
    );
  }

  postButtonVisible() {
    if (this.state.source === "") {
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
            <button className="upload-img-btn" onClick={this.uploadMedia}>Upload Video</button>
            {this.state.source.length > 0 && <video className="post-form-video-preview" width="280" height="210" controls>
              <source src={this.state.source}/>
            </video>}
            <textarea
              className="post-form-text-body"
              onChange={this.updateInput("body")}
              placeholder="Your text here"
              value={this.state.body}/>
          </div>
          <div className="post-form-btn-bar">
            <Link to="/dashboard"><button className="post-form-btn-close">Close</button></Link>
            <button onClick={this.handleSubmit} className={this.postButtonVisible()}>{this.props.actionButton}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default VideoPostForm;
