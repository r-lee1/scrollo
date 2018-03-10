import React from 'react';
import { Link } from 'react-router-dom';

import { deleteFollow } from '../../../util/follow_api_util';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.removePost = this.removePost.bind(this);
    this.editButtonVisible = this.editButtonVisible.bind(this);
    this.deleteButtonVisible = this.deleteButtonVisible.bind(this);
    this.removeFollow = this.removeFollow.bind(this);
    this.topFunction = this.topFunction.bind(this);
    this.likePost = this.likePost.bind(this);
    this.toggleLikeButton = this.toggleLikeButton.bind(this);
  }

  removePost(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }

  removeFollow(e) {
    e.preventDefault();
    this.props.deleteFollow(this.props.post.current_user_to_author_follow[0].id).then(this.props.fetchPosts);
  }

  deleteButtonVisible() {
    if (this.props.currentUser.id === this.props.post.author_id) {
      return (
        <button className="post-delete-btn" onClick={this.removePost}>x</button>
      );
    } else {
      return (
        <button className="post-unfollow-btn" onClick={this.removeFollow}>Unfollow</button>
      );
    }
  }

  editButtonVisible(postType) {
    if (this.props.currentUser.id === this.props.post.author_id) {
      return (
        <Link to={`/dashboard/edit/${postType}/${this.props.post.id}`}>
          <button onClick={this.topFunction} className="post-edit-btn"><i className="fas fa-cog"></i></button>
        </Link>
      );
    } else {
      return (
        <div className="post-likes-bar-s">
          <h4 className="post-like-count">{this.props.post.likes_count}</h4>
          {this.toggleLikeButton()}
        </div>
      );
    }
  }

  likePost() {
    if (!this.props.liked) {
      this.props.createLike(this.props.post.id);
    } else {
      this.props.deleteLike(this.props.post.id);
    }
  }

  toggleLikeButton() {
    if (this.props.liked) {
      return <button onClick={this.likePost} className="post-like-btn-liked"><i className="fas fa-heart"></i></button>;
    } else {
      return <button onClick={this.likePost} className="post-like-btn"><i className="far fa-heart"></i></button>;
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
