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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.updateInput("source")}
            placeholder="image url"
            value={this.state.source}>
          </input>
          <button onClick={this.uploadImage}>Upload Image</button>
          <img src={this.state.source} />
          <textarea
            onChange={this.updateInput("body")}
            placeholder="Your text here"
            value={this.state.body.value}/>
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default PhotoPostForm;
