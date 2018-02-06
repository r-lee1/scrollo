import React from 'react';

class AudioPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post_type: "audio",
      source: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadMedia = this.uploadMedia.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
    this.setState({
      post_type: "audio",
      source: "",
      body: ""
    });
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
        window.postMedia(result[0].url);
      }
    );
  }

  render() {
    return(
      <div className="post-form">
        <form>
          <div className="post-form-content">
            <button className="upload-img-btn" onClick={this.uploadMedia}>Upload Audio</button>
            <audio controls>
              <source src={this.state.source}/>
            </audio>
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

export default AudioPostForm;
