class CreateTrades < ActiveRecord::Migration[5.1]
  def change
    create_table :trades do |t|
      t.belongs_to :trade_requester
      t.belongs_to :trade_recipient
      t.belongs_to :wanted_item
      t.belongs_to :collateral_item

      t.timestamps
    end
  end
end
