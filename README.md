# Scrollo

[Scrollo Live](https://scrollo.herokuapp.com/#/signup)

Scrollo is a full-stack web application inspired by Tumblr, a microblogging website that allow users to express themselves by creating content in the form of multimedia posts. This application is built using a React/Redux frontend, Ruby on Rails backend, and PostgreSQL database.

## Features

### Post Creation

Users can create posts of different types (text, photo, quote, link, audio, and video). The user can select the type of post they want to create and a post form that is tailored to the post type becomes available.

![post-form-demo](https://media.giphy.com/media/xUNd9K8IQikFkN7q8g/giphy.gif)

Photo, audio, and video can be uploaded using the Cloudinary widget.

```javascript
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
```

### Feed

The feed is populated with the user's own posts and those of other users the current user is following.
Actions available to the user on these posts change depending the authorship.

Users can edit/delete their own posts through the feed.

![post-edit-demo](https://media.giphy.com/media/26wkG8Uj24rF7cc0w/giphy.gif)

Users can like/unlike other users' posts.

![post-like-demo](https://media.giphy.com/media/l3diP9PZZ0dAyLPby/giphy.gif)

## Future Directions
* User avatars
* Search
