class RenameGamesProfitToReward < ActiveRecord::Migration[7.1]
  def change
    rename_column :games, :profit, :reward
  end
end
