class RemoveBsFromGames < ActiveRecord::Migration[7.1]
  def change
    remove_column :games, :bs, :string
  end
end
