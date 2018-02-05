class Api::PostsController < ApplicationController

  def index
    cloud_name = ENV['CLOUD_NAME']
    upload_preset = Figaro.env.UPLOAD_PRESET
    puts "API KEYS: #{cloud_name} #{upload_preset}"
    @posts = Post.all
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
