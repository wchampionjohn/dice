class CreatePlacedItems < ActiveRecord::Migration[7.1]
  def change
    create_table :placed_items do |t|
      t.references :game, null: false, foreign_key: true
      t.references :bet_item, null: false, foreign_key: true
      t.integer :bet_amount
      t.timestamps
    end
  end
end
