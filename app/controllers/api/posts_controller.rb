class Api::PostsController < ApplicationController

  def index
    @posts = Post.includes(:author)
    render 'api/posts/index'
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render 'api/posts/post'
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  private

  def post_params
    params.require(:post).permit(:post_type, :title, :body, :source)
  end

end

# u = User.find_by()
# uPhotos = u.
