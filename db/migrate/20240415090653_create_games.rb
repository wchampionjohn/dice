class CreateGames < ActiveRecord::Migration[7.1]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :bet_amount, default: 0
      t.integer :profit, default: 0
      t.integer :number
      t.integer :bs, limit: 1
      t.integer :dice1, limit: 1
      t.integer :dice2, limit: 1
      t.integer :dice3, limit: 1

      t.datetime :created_at
    end
  end
end
