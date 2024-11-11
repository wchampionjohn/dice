class CreateBetItems < ActiveRecord::Migration[7.1]
  def change
    create_table :bet_items do |t|
      t.string :code
      t.decimal :base_odds, precision: 5, scale: 2
      t.boolean :multiple_dice_amount, default: false
      t.timestamps
    end
  end
end
