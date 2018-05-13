class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :received_trades, class_name: "Trade", foreign_key: "trade_recipient"
  has_many :requested_trades, class_name: "Trade", foreign_key: "trade_requester"
  has_many :collateral_items, through: :received_trades
  has_many :wanted_items, through: :requested_trades
end
