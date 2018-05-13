class Trade < ApplicationRecord
 belongs_to :trade_requester, class_name: "User"
 belongs_to :trade_recipient, class_name: "User"
 belongs_to :wanted_item, class_name: "Item"
 belongs_to :collateral_item, class_name: "Item"
end
