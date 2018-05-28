class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show]
  before_action :authenticate_user!, only: [:my_items, :add_item]

  def index
    items = Item.where(user_id: params[:user_id])
    render json: items
  end

  def show
    render json: @item
  end

  def my_items
    render json: current_user.items.all
  end 

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :description)
    end
  
end
