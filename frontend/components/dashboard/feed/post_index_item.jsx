import React from 'react';
import { Link, Route } from 'react-router-dom';

import TextPostFormContainer from '../post_form/text_post_form_container';

import {
  AuthRoute,
  ProtectedRoute
} from '../../../util/route_utils';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.removePost = this.removePost.bind(this);
    this.editButtonVisible = this.editButtonVisible.bind(this);
    this.deleteButtonVisible = this.deleteButtonVisible.bind(this);
    this.topFunction = this.topFunction.bind(this);
  }

  removePost(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }

  deleteButtonVisible() {
    if (this.props.currentUser.id === this.props.post.author_id) {
      return (
        <button className="post-delete-btn" onClick={this.removePost}>X</button>
      );
    } else {
      return null;
    }
  }

  editButtonVisible(postType) {
    if (this.props.currentUser.id === this.props.post.author_id) {
      return (
        <Link to={`/edit/${postType}/${this.props.post.id}`}>
          <button onClick={this.topFunction} className="post-edit-btn"><i className="fas fa-cog"></i></button>
        </Link>
      );
    } else {
      return (
        <button className="post-like-btn"><i className="far fa-heart"></i></button>
      );
    }
  }

  topFunction() {
      window.scroll({
      top: 150,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    if (this.props.post.post_type === "text") {
      return (
          <li>
            <div className="post">
              <div className="post-util-bar">
                <h4 className="post-author">{this.props.post.author}</h4>
                {this.deleteButtonVisible()}
              </div>
              <h2 className="post-title">{this.props.post.title}</h2>
              <p className="post-body-centered">{this.props.post.body}</p>
              <div className="post-likes-bar">
                {this.editButtonVisible(this.props.post.post_type)}
              </div>
            </div>
          </li>
        );
    } else if (this.props.post.post_type === "photo"){
      return (
          <li>
            <div className="post">
              <div className="post-util-bar">
                <h4 className="post-author">{this.props.post.author}</h4>
                {this.deleteButtonVisible()}
              </div>
              <img className="post-photo" src={`${this.props.post.source}`} />
              <p className="post-body">{this.props.post.body}</p>
              <div className="post-likes-bar">
                {this.editButtonVisible(this.props.post.post_type)}
              </div>
            </div>
          </li>
        );
    } else if (this.props.post.post_type === "quote") {
      return (
        <li>
          <div className="post">
            <div className="post-util-bar">
              <h4 className="post-author">{this.props.post.author}</h4>
              {this.deleteButtonVisible()}
            </div>
            <h2 className="post-quote-body">{`"${this.props.post.body}"`}</h2>
            <p className="post-quote-source">{`- ${this.props.post.source}`}</p>
            <div className="post-likes-bar">
              {this.editButtonVisible(this.props.post.post_type)}
            </div>
          </div>
        </li>
      );
    } else if (this.props.post.post_type === "link") {
      return (
        <li>
          <div className="post">
            <div className="post-util-bar">
              <h4 className="post-author">{this.props.post.author}</h4>
              {this.deleteButtonVisible()}
            </div>
            <div className="post-link">
              <a href={this.props.post.source} target="_blank">{this.props.post.body}</a>
            </div>
            <div className="post-likes-bar">
              {this.editButtonVisible(this.props.post.post_type)}
            </div>
          </div>
        </li>
      );
    } else if (this.props.post.post_type === "audio") {
      return (
        <li>
          <div className="post">
            <div className="post-util-bar">
              <h4 className="post-author">{this.props.post.author}</h4>
              {this.deleteButtonVisible()}
            </div>
            <audio className="post-audio" controls>
              <source src={this.props.post.source}/>
            </audio>
            <p className="post-body">{this.props.post.body}</p>
            <div className="post-likes-bar">
              {this.editButtonVisible(this.props.post.post_type)}
            </div>
          </div>
        </li>
      );
    } else if (this.props.post.post_type === "video") {
      return (
        <li>
          <div className="post">
            <div className="post-util-bar">
              <h4 className="post-author">{this.props.post.author}</h4>
              {this.deleteButtonVisible()}
            </div>
            <video className="post-video" width="500" height="375" controls>
              <source src={this.props.post.source}/>
            </video>
            <p className="post-body">{this.props.post.body}</p>
            <div className="post-likes-bar">
              {this.editButtonVisible(this.props.post.post_type)}
            </div>
          </div>
        </li>
      );
    }
  }
}




export default PostIndexItem;
