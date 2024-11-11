class RemoveNumberFromGames < ActiveRecord::Migration[7.1]
  def change
    remove_column :games, :number, :string
  end
end
