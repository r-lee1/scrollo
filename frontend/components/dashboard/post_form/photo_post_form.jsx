import React from 'react';

class PhotoPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post_type: "photo",
      source: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
    this.setState({
      post_type: "photo",
      source: "",
      body: ""
    });
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  postImage(url) {
    this.setState({ ["source"]: url });
  }

  uploadImage(e) {
    e.preventDefault();
    window.postImage = this.postImage.bind(this);
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(errors, result){
        window.postImage(result[0].url);
      }
    );
  }

  render() {
    return(
      <div className="post-form">
        <form>
          <div className="post-form-content">
            <button className="upload-img-btn" onClick={this.uploadImage}>Upload Photo</button>
            <img src={this.state.source} />
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

export default PhotoPostForm;


// <input
//   onChange={this.updateInput("source")}
//   placeholder="image url"
//   value={this.state.source}>
// </input>
