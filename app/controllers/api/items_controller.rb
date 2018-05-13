class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show]

  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :description)
    end
  
end
