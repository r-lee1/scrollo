class Api::LikesController < ApplicationController

  def create
    @like = Like.new(post_id: params[:post_id], user_id: current_user.id)
    if @like.save
      @post = @like.liked_post
      render 'api/posts/post'
    end
  end

  def destroy
    
  end

end
