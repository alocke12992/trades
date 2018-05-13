class Item < ApplicationRecord
  has_many :collateral_items, class_name: "Trade", foreign_key: "collateral_item"
 has_many :wanted_items, class_name: "Trade", foreign_key: "wanted_item"
 has_many :trade_requesters, through: :wanted_items
 has_many :trade_recipients, through: :collateral_items
end
