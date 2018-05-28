class Api::UsersController < ApplicationController
  before_action :authenticate_user! 

  def index
    users = User.all_except(current_user)
    render json: users
  end

  def show
    render json: @user
  end

  private
  def set_user
    @user = User.find(params[:id])
  end
end
