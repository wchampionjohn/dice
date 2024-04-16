class CreateBetItemGames < ActiveRecord::Migration[7.1]
  def change
    create_table :bet_item_games do |t|
      t.integer :bet_item_id
      t.integer :game_id
      t.integer :bet_amount, default: 0
      t.integer :profit, default: 0
      t.integer :status, limit: 1

      t.timestamps
    end
  end
end
