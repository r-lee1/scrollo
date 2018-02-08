class Api::FollowsController < ApplicationController

  def index
    followed_users = current_user.followees.pluck(:id)
    followed_users << current_user.id
    @follow_users = User.where.not(id: followed_users)
    @follow_users = @follow_users.sample(5)
    render 'api/users/follow_user_index'
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      followed_users = current_user.followees.pluck(:id)
      followed_users << current_user.id
      @follow_users = User.where.not(id: followed_users)
      @follow_users = @follow_users.sample(5)
      render 'api/users/follow_user_index'
    else
      render json: @follow.errors.full_messages
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end

end
