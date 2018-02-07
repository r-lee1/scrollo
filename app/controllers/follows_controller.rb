class FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      current_user
      render
    else
      render json: @follow.errors.full_messages
    end

  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end

end
