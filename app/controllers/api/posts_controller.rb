class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    render 'api/posts/index'
  end

end
