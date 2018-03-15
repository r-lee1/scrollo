class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.img_url = "https://res.cloudinary.com/dxyit2phe/image/upload/v1521152604/if_Smiley_34616_ix351c.png"
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end
