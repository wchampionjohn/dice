class CreateBetItems < ActiveRecord::Migration[7.1]
  def change
    create_table :bet_items do |t|
      t.string :code
      t.decimal :odds, precision: 5, scale: 2

      t.timestamps
    end
  end
end
